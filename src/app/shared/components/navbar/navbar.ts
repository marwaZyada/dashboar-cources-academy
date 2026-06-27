import { Component } from '@angular/core';
import {RouterLink,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   currentLang = 'en';

  get isLoggedIn(): boolean {
    // return !!localStorage.getItem('token');
    return true;
  }

  changeLanguage(): void {

    this.currentLang =
      this.currentLang === 'en'
        ? 'ar'
        : 'en';

    // ngx-translate
    // this.translate.use(this.currentLang);
  }

  logout(): void {

    localStorage.removeItem('token');

  }
}
