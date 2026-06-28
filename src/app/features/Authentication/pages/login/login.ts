import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,RouterLink,MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
private authService=inject(AuthService);
private router=inject(Router);
private fb=inject(FormBuilder);

  loginForm:FormGroup = this.fb.group({
    email: [''],
    password: [''],
  });

  login() {

  const { email, password } = this.loginForm.value;
  console.log(email, password,"login form values");

  this.authService
      .login(email!, password!)
      .subscribe(success => {

        if (success) {

          this.router.navigate(['/dashboard']);

        } else {

          alert('Invalid email or password');

        }

      });

}
}
