import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../../core/auth/auth';
import { SideNav } from '../../../shared/components/side-nav/side-nav';
import { TopNav } from '../../../shared/components/top-nav/top-nav';

@Component({
  selector: 'app-feature-container',
  imports: [RouterModule, TopNav, SideNav],
  templateUrl: './feature-container.html',
  styleUrl: './feature-container.css',
})
export class FeatureContainer {
  constructor(private authService: Auth, private router: Router) {}

  emitter(event: any) {
    switch (event.type) {
      case 'LOGOUT': {
        this.authService.logout();
        this.router.navigate(['auth']);
        break;
      }
    }
  }
}
