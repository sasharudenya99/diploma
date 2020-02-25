import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { StudentServiceData } from 'src/app/sharedService/student.data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  studentServiceData = new StudentServiceData(this.studentService);

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentServiceData._loadUserActivity();
  }

  load() {
    return this.studentServiceData.userActivity;
  }

}
