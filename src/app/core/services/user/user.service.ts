import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   private http = inject(HttpClient);

  apiUrl = 'api/users';

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }
}
