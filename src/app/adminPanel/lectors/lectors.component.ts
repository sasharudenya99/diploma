import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LectorModalComponent } from '../modal/lector-modal/lector-modal.component';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/service/professor.service';
import { DeleteLectorComponent } from '../modal/delete-person/delete-person.component';
import { EditLectorComponent } from '../modal/edit-lector/edit-lector.component';

@Component({
  selector: 'app-lectors',
  templateUrl: './lectors.component.html',
  styleUrls: ['./lectors.component.css']
})

export class LectorsComponent implements OnInit {

  isLoad: boolean;
  dataLector: Professor;
  displayedColumns: string[] = ['position', 'name', 'login', 'lastLogin', 'status', 'subjects', 'action'];
  dataSource = new MatTableDataSource<object>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isDelete = false;

  constructor(private dialog: MatDialog, private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadLector();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProfessor(id) {
    const dialogRef = this.dialog.open(DeleteLectorComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteLector(id);
      }
    });
  }

  openDialogEdit() {
    const dialogRef = this.dialog.open(LectorModalComponent, {
      data: {
        data: this.dataLector
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataLector = result;
    });
    console.log(this.dataLector);
  }

  saveProfessor() {
    const dialogRef = this.dialog.open(LectorModalComponent, {
      data: {
        data: this.dataLector
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataLector = result;
    });
  }

  loadLector() {
    this.professorService.getProfessors().subscribe(items => {
      this.dataSource.data = items;
      this.isLoad = true;
    });
  }

  addLector(professor: Professor): void {
    this.professorService.addProfessor(professor).subscribe(() => {
      this.loadLector();
      this.dataLector = new Professor();
    });
  }

  deleteLector(id) {
    this.professorService.deleteProfessor(id).subscribe(() => {
      this.loadLector();
    });
  }

}
