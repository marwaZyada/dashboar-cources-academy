import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-state-card',
  imports: [MatIconModule,MatCardModule],
  templateUrl: './state-card.html',
  styleUrl: './state-card.css',
})
export class StateCard {
    @Input() title!: string;

  @Input() value!: string;

  @Input() icon!: string;

  @Input() color!: string;
}
