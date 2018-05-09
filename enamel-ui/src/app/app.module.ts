import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { AdminComponent } from './user/settings/admin/admin.component';
import { SettingsComponent } from './user/settings/settings.component';
import { AccountComponent } from './user/settings/account/account.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { AddComponent } from './patient/add/add.component';
import { DetailsComponent } from './patient/details/details.component';
import { ListComponent } from './patient/list/list.component';
import { PaymentsComponent } from './patient/payments/payments.component';
import { AppointmentsComponent } from './patient/appointments/appointments.component';
import { CalenderComponent } from './appointments/calender/calender.component';
import { InteractiveComponent } from './patient/interactive/interactive.component';
import { VisitsComponent } from './patient/visits/visits.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AdminComponent,
    SettingsComponent,
    AccountComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    AddComponent,
    DetailsComponent,
    ListComponent,
    PaymentsComponent,
    AppointmentsComponent,
    CalenderComponent,
    InteractiveComponent,
    VisitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
