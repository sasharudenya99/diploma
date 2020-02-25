import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DeleteLectorComponent } from '../modal/delete-person/delete-person.component';
import { AddGroupComponent } from '../modal/add-group/add-group.component';
import { Group } from 'src/app/model/group';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent implements OnInit {

  displayedColumns: string[] = ['number',  'name', 'startYear', 'graduationYear', 'studentsCount', 's'];
  dataSource = new MatTableDataSource<object>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isDelete = false;
  isLoad = false;
  group = new Group();

  constructor(private dialog: MatDialog, private groupService: GroupService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.loadGroup();
  }

  loadGroup() {
    this.groupService.getGroups().subscribe(items => {
      this.dataSource.data = items;
      this.isLoad = true;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogDelete(id) {
    const dialogRef = this.dialog.open(DeleteLectorComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupService.deleteGroup(id).subscribe(() => {
          this.loadGroup();
        });
      }
    });
  }

  openDialogEdit() {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      data: {
        group: this.group,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.group = result;
    });
    console.log(this.group);
  }
}
