import { Routes } from '@angular/router';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetails } from './pages/course-details/course-details';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CourseList
  },
  {
    path: ':id',
    component: CourseDetails
  }
];