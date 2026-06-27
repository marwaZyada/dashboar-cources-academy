import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Course } from '@features/course/model/Course';
import { CourseDetails } from '@features/course/pages/course-details/course-details';
import { CourseService } from '@features/course/services/course.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 private courseservice = inject(CourseService);
 private dialog = inject(MatDialog);
 courseDetails!:Course ;
   courses = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      description: 'Learn Angular from beginner to advanced.',
      price: 1500,
      imageUrl:
      'https://picsum.photos/400/250?1'
    },
    {
      id: 2,
      title: 'ASP.NET Core API',
      description: 'Build professional APIs using ASP.NET Core.',
      price: 1800,
      imageUrl:
      'https://picsum.photos/400/250?2'
    },
    {
      id: 3,
      title: 'React Basics',
      description: 'Master React and modern frontend development.',
      price: 1400,
      imageUrl:
      'https://picsum.photos/400/250?3'
    }
  ];

  // view(courseId: number) {
  //   console.log('View course with ID:', courseId);
  //   this.
  // }
   

}
