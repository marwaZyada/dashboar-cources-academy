import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StateCard } from '@shared/components/state-card/state-card';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,MatCardModule,StateCard,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  courses = [
    {
      name: 'Angular',
      category: 'Frontend',
      students: 120
    },
    {
      name: 'ASP.NET',
      category: 'Backend',
      students: 90
    },
    {
      name: 'Flutter',
      category: 'Mobile',
      students: 70
    }
  ];

  activities = [
    'Ahmed added a new course',
    'Sara enrolled in Angular',
    'Mohamed updated Flutter course',
    'New instructor joined'
  ];

}
