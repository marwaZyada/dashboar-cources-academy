import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/ApiResponse';
import { Category } from '../model/Course';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
    private apiUrl = 'api/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse<Category[]>> {
    return this.http.get<ApiResponse<Category[]>>(this.apiUrl);
  }
}
