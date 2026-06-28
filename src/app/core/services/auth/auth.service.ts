import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user/user.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private userService = inject(UserService);
 private router = inject(Router);

  login(email: string, password: string) {

    return this.userService.getUsers().pipe(

      map(users => {

        const user = users.find(
          u =>
            u.email === email &&
            u.password === password
        );

        if (user) {
          localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
          );
          return true;
        }

        return false;
      })

    );

  }

 

  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );
  }
  isAdmin(): boolean {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user.role === 'admin';
}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
