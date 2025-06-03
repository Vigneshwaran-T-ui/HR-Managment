import { Component } from '@angular/core';
import { Login } from '../login/login';

@Component({
  selector: 'app-auth-component',
  imports: [Login],
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.css',
})
export class AuthComponent {}
