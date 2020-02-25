import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { LectorsComponent } from './lectors/lectors.component';
import { LectorModalComponent } from './modal/lector-modal/lector-modal.component';
import { GroupComponent } from './group/group.component';
import { AddGroupComponent } from './modal/add-group/add-group.component';
import { GroupTableComponent } from './group-table/group-table.component';
import { MainComponent } from './main/main.component';
import { StudentsComponent } from './students/students.component';
import { ResetThePasswordComponent } from './reset-the-password/reset-the-password.component';
import { DeleteLectorComponent } from './modal/delete-person/delete-person.component';
import { EditLectorComponent } from './modal/edit-lector/edit-lector.component';
import { ListOfSubjectComponent } from './list-of-subject/list-of-subject.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { TableForStudentsComponent } from './table-for-students/table-for-students.component';
import { TableForLectorsComponent } from './table-for-lectors/table-for-lectors.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LectorsComponent,
    LectorModalComponent,
    GroupComponent,
    AddGroupComponent,
    GroupTableComponent,
    MainComponent,
    StudentsComponent,
    ResetThePasswordComponent,
    DeleteLectorComponent,
    EditLectorComponent,
    ListOfSubjectComponent,
    TableForStudentsComponent,
    TableForLectorsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [LectorModalComponent, TableForStudentsComponent, TableForLectorsComponent, AddGroupComponent,
    DeleteLectorComponent,
    EditLectorComponent],
  providers: [],
  exports: [
    NavbarComponent,
    LectorsComponent,
    LectorModalComponent,
    GroupComponent, AddGroupComponent,
    GroupTableComponent,
    TableForStudentsComponent,
    TableForLectorsComponent,
    MainComponent,
    AddGroupComponent,
    StudentsComponent,
    ResetThePasswordComponent,
    DeleteLectorComponent,
    EditLectorComponent,
    ListOfSubjectComponent
  ]
})
export class AdminModule {}
