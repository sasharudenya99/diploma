import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, Sort, MatSort, MatDialog } from '@angular/material';
import { DeleteLectorComponent } from '../modal/delete-person/delete-person.component';
import { EditLectorComponent } from '../modal/edit-lector/edit-lector.component';
import { ProfessorService } from 'src/app/service/professor.service';

export class LectorData {
  login: string;
  password: string;
  confirmPassword: string;
  lastname: string;
  firstname: string;
  middleName: string;
  secretary: any;
  head: any;
}

@Component({
  selector: 'app-table-for-lectors',
  templateUrl: './table-for-lectors.component.html',
  styleUrls: ['./table-for-lectors.component.css']
})
export class TableForLectorsComponent implements OnInit {

  isLoad: boolean;
  dataLector = new LectorData();
  displayedColumns: string[] = ['position', 'name', 'login', 'lastLogin', 'status', 'subjects', 'action'];
  dataSource = new MatTableDataSource<object>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isDelete = false;

  constructor(private dialog: MatDialog, private professorService: ProfessorService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadLector();
    this.dataLector.lastname = 'Попова';
    this.dataLector.firstname = 'Юлия';
    this.dataLector.middleName = 'Борисовна';
    this.dataLector.secretary = true;
    this.dataLector.head = true;
  }

  loadLector() {
    this.professorService.getProfessors().subscribe(items => {
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
        this.professorService.deleteProfessor(id).subscribe(() => {
          this.loadLector();
        });
      }
    });
  }

  openDialogEdit() {
    const dialogRef = this.dialog.open(EditLectorComponent, {
      data: {
        lastName: this.dataLector.lastname,
        firstName: this.dataLector.firstname,
        middleName: this.dataLector.middleName,
        secretary: this.dataLector.secretary,
        head: this.dataLector.head
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataLector = result;
    });
    console.log(this.dataLector);
  }
}
