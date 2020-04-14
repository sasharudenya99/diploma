import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchGroupComponent } from '../modal/search-group/search-group.component';
import { SubjectService } from 'src/app/service/subject.service';
import { SubjectResponse } from 'src/app/model/subject.response';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-statistic',
  templateUrl: './navbar-statistic.component.html',
  styleUrls: ['./navbar-statistic.component.css']
})
export class NavbarStatisticComponent implements OnInit {

  subjectResponse: SubjectResponse;
  isLoad = false;
  groupId: string;

  constructor(private dialog: MatDialog, private subjectService: SubjectService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.groupId = this.activateRoute.snapshot.firstChild.params.groupId;
    this.getSubjectName(this.groupId);
  }

  getSubjectName(groupId) {
    this.subjectService.getSubjects(groupId).subscribe(subjectResponse => {
      this.subjectResponse = subjectResponse;
      this.isLoad = true;
    });
  }

  isSubject() {
    return this.subjectResponse.Subjects.length !== 0;
  }

  openControlGroupDialog() {
    const ref = this.dialog.open(SearchGroupComponent);
    ref.afterClosed().subscribe(() => {
        this.ngOnInit();
    });
  }
}
