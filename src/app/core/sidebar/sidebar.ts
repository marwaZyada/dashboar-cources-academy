import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive,MatIconModule ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  @Input() opened = true;
  

  menu = [

    {
      title:'Dashboard',
      icon:'dashboard',
      link:'/dashboard'
    },

    {
      title:'Courses',
      icon:'school',
      link:'/courses'
    },

    {
      title:'Categories',
      icon:'category',
      link:'/categories'
    },

    {
      title:'Students',
      icon:'groups',
      link:'/students'
    }

  ];

}
