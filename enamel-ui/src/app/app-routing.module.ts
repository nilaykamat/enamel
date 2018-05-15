import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component'
import { RegisterComponent } from './user/register/register.component'

const routes: Routes = [
	{
	    path: '',
	    component: LoginComponent,
	},
	{
	    path: 'login',
	    component: LoginComponent,
	},
	{
	    path: 'welcome',
	    component: DashboardComponent,
	},
	{
	    path: 'register',
	    component: RegisterComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
