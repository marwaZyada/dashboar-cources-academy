import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-page-header',
  imports: [MatIconModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
      title = input.required<string>();
      name = input.required<string>();

  subtitle = input<string>();

  addClicked = output<void>();
}
