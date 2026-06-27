import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { Category } from '@features/course/model/Course';
import { CategoryService } from '@features/course/services/category.sevice';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
import { CourseService } from '@features/course/services/course.service';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-course-form',
  imports: [    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
  MatIconModule,
MatDividerModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm implements OnInit {
  isEditMode !:boolean ; // Flag to determine if the form is in edit mode
   private fb = inject(FormBuilder);
   private categoryService = inject(CategoryService);
   private courseService = inject(CourseService);
   private dialogRef = inject(MatDialogRef<CourseForm>);
   data = inject< number>(
  MAT_DIALOG_DATA,
  { optional: true }
);
   private cdr = inject(ChangeDetectorRef);
 categories:Category[] = []
 statusOptions = [
    'Active',
    'Draft', 
     'Archived' 
  ];
  form!:FormGroup;
 ngOnInit() {
  
this.createForm();
  this.isEditMode = this.data!=null && this.data!==undefined;
  console.log('CourseForm initialized. Edit mode:', this.isEditMode, 'Course ID:', this.data);  
  if (this.data) {
  this.isEditMode = true;
  this.getCourseById( this.data);
}
    // Fetch categories from the service and assign to this.categories
    // Example:
  this.getAllCategories();

  


  }
createForm(oldform?: any) {
  this.form = this.fb.group({
    courseName: [
      oldform?.courseName ?? '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    instructorName: [
      oldform?.instructorName ?? '',
      Validators.required
    ],

    category: [
      oldform?.category ?? '',
      Validators.required
    ],

    duration: [
      oldform?.duration?? null,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    price: [
    oldform?.price??  null,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    status: [
     oldform?.status ?? '',
      Validators.required
    ],

    description: [
     oldform?.description ?? '',
      Validators.maxLength(500)
    ],
    createdDate: [
    oldform?.createdDate??  new Date(),
      Validators.required
    ]
  });
}

  submit(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log(this.form.value);
      return;
    }
    else {
       if (this.isEditMode) {
console.log('form value:', this.form.value);
const course = {
  id: this.data,
  ...this.form.value
};
    this.courseService.update(
      this.data??0,
     course
    ).subscribe( {
      next: (response) => {
          console.log('Course updated successfully:', response.data);
      this.dialogRef.close(true);
 },  error: (error) => {
          console.error('Error updating course:', error);
      return;
 }
 

    });

  } else {

      this.addCourse(this.form.value);
    }
  }
  }

  addCourse(form: any) {
    
      this.courseService.create(form).subscribe({
        next: (response) => {
          console.log('Course created successfully:', response.data);
          this.dialogRef.close(true); // Close the dialog and pass true to indicate success
      
        },
        error: (error) => {
          console.error('Error creating course:', error);
      return;
    }

    
  })
      return;
    }
  

  getAllCategories() {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response.data;
        this.cdr.detectChanges();
      console.log('Fetched categories:', this.categories);
    });
  }

  getCourseById(id: number) {
    this.courseService.getById(id).subscribe({
      next: (response) => {
        const course = response.data;
        console.log('Fetched course details:', course);
        this.form.patchValue(course);
      },
      error: (error) => {
        console.error('Error fetching course details:', error);
      }
    });
  }

  close(): void {
    console.log('Form closed');
    this.dialogRef.close();
    // Implement navigation or form reset logic here
  }

  cancel(): void {
    console.log('Form cancelled');
    this.close();
    // Implement navigation or form reset logic here
  }
}
