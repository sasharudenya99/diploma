import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lectures'];
  dataSource = new MatTableDataSource<object>();
  constructor(public dialogRef: MatDialogRef<SubjectListComponent>) { }

  ngOnInit() {
    this.dataSource.data = [
    {name: 'ghbjmkl,gvhbjmkl,ghjmkl', lectures: ['Попова Юля Борисовна', 'Руденя Александра Сергеевна']},
    {name: 'ghbjmkl,gvhbjmkl,gjmkl', lectures: ['Попова Юля Борисовна', 'Руденя Александра Сергеевна']},
    {name: 'ghbjmkl,gvhbjmkl,ghjmkl', lectures: ['Попова Юля Борисовна', 'Руденя Александра Сергеевна']}
  ];
  }

}
