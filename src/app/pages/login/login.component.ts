import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
  constructor(public _auth: AuthService) {}

  public loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    //  if (this.loginForm.valid) {
    //    this.authService.login(this.loginForm.value).subscribe((Data: any) => {
    //      if (this.authService.isLoggedIn()) {
    //        this.router.navigate(['/Admin']);
    //      }
    //    });
    //  }
  }
}
