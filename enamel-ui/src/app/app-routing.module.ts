import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { RegisterComponent } from './user/register/register.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

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
	},
	{
	    path: 'patients',
	    component: PatientListComponent,
	},
	{
	    path: 'patient/add',
	    component: PatientAddComponent,
	},
	{
	    path: 'patient/details',
	    component: PatientDetailsComponent,
	},
	{
	    path: 'patient/edit',
	    component: PatientEditComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
