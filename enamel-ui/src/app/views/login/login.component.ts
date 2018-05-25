import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
	constructor(private router: Router) { }

	login = () => {
        this.router.navigateByUrl('/dashboard');
	}
}
