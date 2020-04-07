import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Professor } from 'src/app/model/professor';
import { GroupService } from 'src/app/service/group.service';
import { Group } from 'src/app/model/group';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-lector',
  templateUrl: './edit-lector.component.html',
  styleUrls: ['./edit-lector.component.css']
})
export class EditLectorComponent implements OnInit {

  groups: Group[];
  form: FormGroup;
  @Output() submitEM = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    public groupService: GroupService,
    public dialogRef: MatDialogRef<EditLectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const professor = this.data.data;
    const fullName = professor.FullName.split(' ');
    this.loadGroup();

    this.form = this.formBuilder.group({
      Id: new FormControl(professor.Id),
      Surname: new FormControl(fullName[0]),
      Name: new FormControl(fullName[1]),
      Patronymic: new FormControl(fullName[2]),
      IsSecretary: new FormControl(professor.IsSecretary),
      IsLecturerHasGraduateStudents: new FormControl(professor.IsLecturerHasGraduateStudents),
      Groups: new FormControl(professor.Groups),
      FullName: new FormControl(professor.FullName)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close({data: this.sendData()});
  }

  loadGroup() {
    return this.groupService.getGroups().subscribe( items => {
      this.groups = items;
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  sendData() {
    const prof = this.data.data;
    prof.Surname = this.form.controls.Surname.value;
    prof.Name = this.form.controls.Name.value;
    prof.Patronymic = this.form.controls.Patronymic.value;
    if (!this.form.controls.IsSecretary.value) {
      this.form.controls.IsSecretary.setValue(false);
    }
    prof.IsSecretary = this.form.controls.IsSecretary.value;
    if (!this.form.controls.IsLecturerHasGraduateStudents.value) {
      this.form.controls.IsLecturerHasGraduateStudents.setValue(false);
    }
    prof.IsLecturerHasGraduateStudents = this.form.controls.IsLecturerHasGraduateStudents.value;
    prof.Groups = this.form.controls.Groups.value;
    return prof;
  }
}
