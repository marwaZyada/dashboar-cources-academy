import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDropdownlist } from './search-dropdownlist';

describe('SearchDropdownlist', () => {
  let component: SearchDropdownlist;
  let fixture: ComponentFixture<SearchDropdownlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDropdownlist],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDropdownlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
