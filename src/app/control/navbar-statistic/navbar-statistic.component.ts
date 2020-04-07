import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchGroupComponent } from '../modal/search-group/search-group.component';
import { SubjectService } from 'src/app/service/subject.service';
import { SubjectResponse } from 'src/app/model/subject.response';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar-statistic',
  templateUrl: './navbar-statistic.component.html',
  styleUrls: ['./navbar-statistic.component.css']
})
export class NavbarStatisticComponent implements OnInit {

  groupName: string;
  subjectResponse: SubjectResponse;
  isLoad = false;
  groupId: number;

  constructor(private dialog: MatDialog, private subjectService: SubjectService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSubjectName(this.groupId);
    this.groupId = this.activateRoute.snapshot.params.groupId;
    console.log(this.groupId);
  }

  getSubjectName(groupId) {
    this.subjectService.getSubjects(groupId).subscribe(subjectResponse => {
      this.subjectResponse = subjectResponse;
      this.isLoad = true;
    });
  }

  openControlGroupDialog() {
    const dialogRef = this.dialog.open(SearchGroupComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.groupName = result;
    });
  }
}
