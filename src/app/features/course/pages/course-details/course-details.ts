import { Component, inject, signal } from '@angular/core';
import { CourseService } from '@features/course/services/course.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Course } from '@features/course/model/Course';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-course-details',
  imports: [RouterLink,MatCardModule, MatButtonModule, MatIconModule,MatDividerModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
   private courseService = inject(CourseService);
private route = inject(ActivatedRoute);
 fromCourseList=signal<boolean>(false);

  course = signal<Course | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
this.route.queryParams.subscribe(params => {
  console.log("from course list",params['fromCourseList']);
  this.fromCourseList.set(params['fromCourseList'] );
});
    if (id) {
      this.loadCourse(+id);
    }
  
  }

  loadCourse(id:number): void {
    this.courseService.getById(id)
      .subscribe({
        next: (response) => {
          this.course .set( response.data);
          console.log('Course details:', this.course);
        }
      });
  }
}
