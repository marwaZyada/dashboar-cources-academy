import { Component, inject, OnInit, signal } from '@angular/core';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { SearchInput } from '../../../../shared/components/search-input/search-input';
import { DataTable } from '../../../../shared/components/data-table/data-table';
import { Course } from '../../../../features/course/model/Course';
import { EmptyState } from '../../../../shared/components/empty-state/empty-state';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../../../shared/components/confirm-dialog/confirm-dialog';
import { CourseService } from '../../../../features/course/services/course.service';
import { CourseForm } from '../course-form/course-form';
import { NotificationService } from '@core/services/notification/notification.service';
import { CourseDetails } from '../course-details/course-details';
import { Router } from '@angular/router';
import { SearchDropdownlist } from '@shared/components/search-dropdownlist/search-dropdownlist';
@Component({
  selector: 'app-course-list',
  imports: [PageHeader, SearchInput, DataTable, EmptyState,SearchDropdownlist],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  displayedColumns: string[] = [
    'id',
    'courseName',
    'instructorName',
    'category',
    'duration',
    'price',
    'status',
  ];
  statusOptions = [
    {label: 'All', value: null},
    { label: 'Active', value:'Active'  },
    { label: 'Draft', value:'Draft' },
    { label: 'Archived', value: 'Archived' },
  ];
  courses = signal<Course[]>([]);

  private dialog = inject(MatDialog);
  private courseService = inject(CourseService);
  private notificationService = inject(NotificationService);
private router = inject(Router);

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAll().subscribe((response) => {
      this.courses.set(response.data);
    });
  }

  addCourse() {
    console.log('Add course clicked');
    this.openAddDialog();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(CourseForm, {
      width: '95vw',
  maxWidth: '500px',
  maxHeight: '80vh',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      if (result) {
        this.notificationService.apiSuccess('Course added successfully');
        this.loadCourses();
      }
    });
  }
  applyFilter(searchTerm: string) {
    console.log('Search term:', searchTerm);
    this.courseService.getAll().subscribe((response) => {
      const filteredCourses = response.data.filter((course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.courses.set(filteredCourses);
    });
  }

  applystatusFilter($event: any) {
    const selectedStatus = $event;
    console.log('Selected status:', selectedStatus);
    this.courseService.getAll().subscribe((response) => {
      let filteredCourses: Course[];
      if (selectedStatus === null) {
        filteredCourses = response.data; // Show all courses
      } else {
        filteredCourses = response.data.filter(
          (course) => course.status === selectedStatus
        );
      }
      this.courses.set(filteredCourses);
    });
  }

  editCourse(courseId: number) {
    const dialogRef = this.dialog.open(CourseForm, {
      width: '95vw',
  maxWidth: '500px',
  maxHeight: '80vh',
      
      disableClose: true,
      data:  courseId , // Pass the course ID to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      if (result) {
        this.notificationService.apiSuccess('Course updated successfully');
        this.loadCourses();
      }
    });
    console.log('Edit course with ID:', courseId);
  }

  deleteCourse(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      
      data: {
        title: 'Delete Course',
        message: 'Are you sure you want to delete this course?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.courseService.delete(id).subscribe(() => {
          this.notificationService.success('Course deleted successfully', 'Success');
          // Refresh the course list after deletion
          this.loadCourses();
        });
      }
    });
  }

  viewCourse(courseId: number) : void {
  console.log('View course clicked with ID:', courseId);
 
  this.router.navigate(
  ['/courses', courseId],
  {
    queryParams: {
      fromCourseList: true
    }
  }
);

  }


}
