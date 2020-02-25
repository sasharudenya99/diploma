import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { StudentService } from 'src/app/service/student.service';
import { DeleteLectorComponent } from '../modal/delete-person/delete-person.component';

@Component({
  selector: 'app-table-for-students',
  templateUrl: './table-for-students.component.html',
  styleUrls: ['./table-for-students.component.css']
})
export class TableForStudentsComponent implements OnInit {

  isLoad: boolean;
  displayedColumns: string[] = ['position', 'group', 'name', 'userName', 'lastLogin', 'action'];
  dataSource = new MatTableDataSource<object>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isDelete = false;

  constructor(private dialog: MatDialog, private studentService: StudentService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadStudent();
  }

  loadStudent() {
    this.studentService.getStudents().subscribe(items => {
      this.dataSource.data = items;
      this.isLoad = true;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogDelete(id) {
    console.log(id);
    const dialogRef = this.dialog.open(DeleteLectorComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.deleteStudent(id).subscribe(() => {
          this.loadStudent();
        });
      }
    });
  }
}
