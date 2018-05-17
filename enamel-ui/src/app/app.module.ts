import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientAddComponent,
    PatientEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
