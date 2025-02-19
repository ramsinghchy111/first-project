import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private router:Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  adminDashboards() {
    const isLoggedIn = false;  // Check if the user is authenticated
    if (this.loginForm.valid) {
      this.router.navigate(['/adminDashboards']);
    } else {
      // Handle failed login attempt (e.g., show an error message)
      console.error('Login failed!');
    }
  }
  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log('Login Successful', this.loginForm.value);
      // Implement authentication logic here
    } else {
      this.errorMessage = 'Invalid login credentials!';
    }
  }
}
