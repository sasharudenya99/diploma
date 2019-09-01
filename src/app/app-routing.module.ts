import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectorsComponent } from './adminPanel/lectors/lectors.component';
import { StudentsComponent } from './students/students.component';
import { MainComponent } from './adminPanel/main/main.component';
import { ResetThePasswordComponent } from './reset-the-password/reset-the-password.component';
import { GroupComponent } from './adminPanel/group/group.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'lectors', component: LectorsComponent },
  {path: 'students', component: StudentsComponent },
  {path: 'resetPassword', component: ResetThePasswordComponent},
  {path: 'groups', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
