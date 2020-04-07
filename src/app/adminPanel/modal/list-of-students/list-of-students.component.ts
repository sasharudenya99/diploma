import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {

  displayedColumns: string[] = ['student', 'isActive'];
  dataSource = new MatTableDataSource<object>();

  constructor(public dialogRef: MatDialogRef<ListOfStudentsComponent>) { }

  ngOnInit() {
    this.dataSource.data = [
      {student: 'Руденя Александра', isActive: true},
      {student: 'Руденя Елена', isActive: false},
      {student: 'Руденя Дарья', isActive: true}
    ];
  }

}
