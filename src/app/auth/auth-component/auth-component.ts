import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../core/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  imports: [Login],
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.css',
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  formActions(event: any) {
    switch (event) {
      case 'LOGIN': {
        const payload = {
          email: this.loginForm.get('email')?.value,
          password: this.loginForm.get('password')?.value,
        };
        this.authService.login(payload).subscribe((data: any) => {
          if (data) {
            this.router.navigate(['simplesolve']);
            console.info('User Logged In Successfully');
          } else {
            console.error('Invalid Credentials');
          }
        });
      }
    }
  }
}
