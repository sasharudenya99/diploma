import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './adminPanel/admin.modal';
import { LoginModule } from './login/login.module';
import { ControlModule } from './control/control.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentServiceData } from './sharedService/student.data.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProfessorServiceData } from './sharedService/professor.data.service';
import { GroupServiceData } from './sharedService/group.data.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignupModule } from './signup/signup.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    LoginModule,
    ControlModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SignupModule,
    MatCardModule
  ],
  providers: [ StudentServiceData, ProfessorServiceData, GroupServiceData],
  bootstrap: [AppComponent]
})
export class AppModule {}
