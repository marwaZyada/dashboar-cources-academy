import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {

    const courses = [
      {
      "id": 1,
      "courseName": "Angular Fundamentals",
      "instructorName": "Ahmed Ali",
      "category": "Frontend",
      "duration": 20,
      "price": 1500,
      "status": "Active",
      "createdDate": "2026-06-01",
      "description": "Learn the fundamentals of Angular, a popular front-end framework for building web applications."
    },
    {
      "id": 2,
      "courseName": "ASP.NET Core API",
      "instructorName": "Mohamed Hassan",
      "category": "Backend",
      "duration": 25,
      "price": 1800,
      "status": "Active",
      "createdDate": "2026-06-05",
      "description": "Build professional APIs using ASP.NET Core, a cross-platform framework for building web applications and services."
    },
    {
      "id": 3,
      "courseName": "React Basics",
      "instructorName": "Sara Ahmed",
      "category": "Frontend",
      "duration": 18,
      "price": 1400,
      "status": "Draft",
      "createdDate": "2026-06-10",
      "description": "Master React, a popular JavaScript library for building user interfaces, and learn modern frontend development techniques."
    },
    ];
  const categories = [
    {
      id: 1,
      name: 'Frontend'
    },
    {
      id: 2,
      name: 'Backend'
    },
    {
      id: 3,
      name: 'Design'
    }
  ];
  const users=[
  {
    "id": "1",
    "name": "Admin",
    "email": "admin@gmail.com",
    "password": "123456",
    "role": "admin"
  },
  {
    "id": "2",
    "name": "Ali",
    "email": "ali@gmail.com",
    "password": "123456",
    "role": "student"
  }
];
    return { courses, categories ,users};
  }

  genId(courses: any[]): number {
    return courses.length
      ? Math.max(...courses.map(c => c.id)) + 1
      : 1;
  }
}
