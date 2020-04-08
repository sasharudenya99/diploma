import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SearchGroupComponent } from '../control/modal/search-group/search-group.component';
import { StudentService } from '../service/student.service';
import { Group } from '../model/group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  constructor(private studentService: StudentService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openControlGroupDialog() {
    const dialogRef = this.dialog.open(SearchGroupComponent);
  }

}
