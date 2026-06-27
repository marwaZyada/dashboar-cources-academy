import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  imports: [MatIconModule,MatFormFieldModule,MatInputModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
label = input.required<string>();
placeholder = input.required<string>();
search = output<string>();
// onSearch(event: Event) {
//   const value = (event.target as HTMLInputElement).value;
//   this.search.emit(value);
// }

}
