import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SearchGroupComponent } from '../control/modal/search-group/search-group.component';
import { StudentServiceData } from '../sharedService/student.data.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  groupName: string;
  public studentServiceData = new StudentServiceData(this.studentService);
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

  constructor(private studentService: StudentService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.studentServiceData._loadStudent();
  }

  openControlGroupDialog() {
    const dialogRef = this.dialog.open(SearchGroupComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.groupName = result;
    });
  }

}
