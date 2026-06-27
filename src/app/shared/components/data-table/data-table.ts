import { Component, effect,OnInit ,input, output, signal, ViewChild, inject, HostListener } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { Course } from '@features/course/model/Course';


@Component({
  selector: 'app-data-table',
  imports: [    MatTableModule,
    MatButtonModule,
    MatIconModule,MatPaginatorModule,MatSortModule,MatCardModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
   displayedColumns = input<string[]>([]);
  data = input<any[]>([]);
  dataSource = new MatTableDataSource<any>();
  edit = output<number>();
  delete = output<number>();
  view = output<number>();
isMobile=false;
pagedCourses: Course[] = [];
    
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
  set matPaginator(paginator: MatPaginator) {
  if (paginator) {
    this.dataSource.paginator = paginator;
  }
}

  @ViewChild(MatSort)
  sort!: MatSort;
  set matSort(sort: MatSort) {
  if (sort) {
    this.dataSource.sort = sort;
  }
}


  constructor() {
    effect(() => {

      this.dataSource.data = this.data();
      this.pagedCourses = this.dataSource.data.slice(0, this.paginator?.pageSize || 5);
    });

  }
  @HostListener('window:resize')


  onResize() {

  this.isMobile = window.innerWidth <= 768;

}
  ngAfterViewInit(): void {
this.isMobile = window.innerWidth <= 768;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  this.updatePagedData();

  this.paginator.page.subscribe(() => {
    this.updatePagedData();
  });
  }

  applyFilter(event: Event): void {

    const value =
      (event.target as HTMLInputElement)
        .value
        .trim()
        .toLowerCase();

    this.dataSource.filter = value;
  }


  updatePagedData() {

  const data = this.dataSource.filteredData;

  const start =
    this.paginator.pageIndex * this.paginator.pageSize;

  const end =
    start + this.paginator.pageSize;

  this.pagedCourses = data.slice(start, end);
}


}
