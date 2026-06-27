import { Component, input, output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DropDownOption } from '@shared/models/DropDownOptions';
@Component({
  selector: 'app-search-dropdownlist',
  imports: [  FormsModule,
    MatFormFieldModule,
    MatSelectModule],
  templateUrl: './search-dropdownlist.html',
  styleUrl: './search-dropdownlist.css',
})
export class SearchDropdownlist {
  label = input('Search');

  placeholder = input('All');

  options = input<DropDownOption[]>([]);

  selected = '';

  selectedChange = output<any>();

  onSelectionChange(value: any) {
    this.selectedChange.emit(value);
  }
}
