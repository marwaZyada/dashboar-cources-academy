import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFabAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '@core/services/user/user.service';
import { MatOptionModule } from 'node_modules/@angular/material/types/_option-module-chunk';

@Component({
  selector: 'app-register',
  imports: [MatSelectModule,MatCardModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule,RouterLink,MatButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
private fb=inject( FormBuilder);
private userService=inject(UserService);
private router=inject(Router);


  registerForm:FormGroup = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    role: ['student'],
  });

  constructor() {}

  register() {

  if (this.registerForm.invalid) return;

  this.userService
      .createUser(this.registerForm.value)
      .subscribe(() => {

        alert('Registered Successfully');

        this.router.navigate(['/login']);

      });

}
}
