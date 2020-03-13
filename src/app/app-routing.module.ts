import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectorsComponent } from './adminPanel/lectors/lectors.component';
import { MainComponent } from './adminPanel/main/main.component';
import { GroupComponent } from './adminPanel/group/group.component';
import { StudentsComponent } from './adminPanel/students/students.component';
import { ResetThePasswordComponent } from './adminPanel/reset-the-password/reset-the-password.component';
import { LoginComponent } from './login/login.component';
import { MainContolComponent } from './control/main/main.component';
import { SignupComponent } from './signup/signup.component';
import { ItemComponent } from './control/item/item.component';
import { GeneralComponent } from './control/general/general.component';
import { StatsComponent } from './control/stats/stats.component';
import { AdminGenerateComponent } from './adminPanel/admin-generate/admin-generate.component';
import { FilesComponent } from './adminPanel/files/files.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'resetPassword', component: ResetThePasswordComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'admin', component: AdminGenerateComponent, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent},
      { path: 'lectors', component: LectorsComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'groups', component: GroupComponent },
      { path: 'files', component: FilesComponent}
    ]
  },
  {
    path: 'control', component: GeneralComponent, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {path: 'main/:groupId', component: MainContolComponent},
      {path: 'item/:id', component: ItemComponent},
      {path: 'statistic/:groupId', component: StatsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
