import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule,MatMenuModule,MatButtonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  public authService = inject(AuthService);
  private router = inject(Router);
  @Output()

menuClick=new EventEmitter();


logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

changeLanguage(lang: string) {
  console.log(lang);

  // لو هتستخدمي ngx-translate
  // this.translate.use(lang);
}
}
