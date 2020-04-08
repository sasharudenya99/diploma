import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
  }

  load() {
    // return this.studentServiceData.userActivity;
  }

}
