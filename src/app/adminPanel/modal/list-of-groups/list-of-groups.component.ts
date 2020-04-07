import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-of-groups',
  templateUrl: './list-of-groups.component.html',
  styleUrls: ['./list-of-groups.component.css']
})
export class ListOfGroupsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'groups', 'countOfStudents'];
  dataSource = new MatTableDataSource<object>();

  constructor(public dialogRef: MatDialogRef<ListOfGroupsComponent>) { }

  ngOnInit() {
    this.dataSource.data = [
      {subject: 'предмет', groups: ['123456', '123456', '123456'], countOfStudents: [22, 23, 45]},
      {subject: 'ghbjmkl,gvhbjmkl,gjmkl', groups: ['123456', '123456'], countOfStudents: [22, 23]},
      {subject: 'ghbjmkl,gvhbjmkl,ghjmkl', groups: ['123456', '123456'], countOfStudents: [22, 23]}
    ];
  }

}
