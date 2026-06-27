import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '@core/navbar/navbar';
import { Sidebar } from '@core/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Navbar,Sidebar ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
    sidebarOpened = signal(true);

//  afterViewInit() {
//     this.onresized();
//     window.addEventListener('resize', () => {
//       this.onresized();
//     });
//   }   

// onresized() {
//     if (window.innerWidth < 768) {
//       this.sidebarOpened.set(true);
//     } else {
//       this.sidebarOpened.set(true);
//     }
//   }

  toggleSidebar() {
    this.sidebarOpened.update(v => !v);
  }
}
