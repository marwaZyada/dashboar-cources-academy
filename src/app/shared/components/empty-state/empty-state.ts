import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
@Component({
  selector: 'app-empty-state',
  imports: [MatIconModule],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.css',
})
export class EmptyState {
  message=input.required<string>();
  title=input.required<string>();
}
