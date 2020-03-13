import { Component, OnInit } from '@angular/core';
import { LectureService } from 'src/app/service/lecture.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { LabService } from 'src/app/service/lab.service';
import { flatMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  dataSourceForLab = new MatTableDataSource<object>();
  dataSourceForLecture = new MatTableDataSource<object>();
  isLoadData = false;

  constructor(private lectureService: LectureService, private labService: LabService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParamIdFromUrl();
  }

  isDataSourceForLecture() {
    return this.dataSourceForLecture.data.length != 0;
  }

  isDataSourceForLab() {
    return this.dataSourceForLab.data.length != 0;
  }

  getParamIdFromUrl() {
    this.route.params.pipe(
     flatMap(({id}) => forkJoin([
       this.lectureService.getLectures(id),
       this.labService.getLabs(id),
      ])),
    )
    .subscribe(([lectures, labs]) => {
      this.dataSourceForLecture.data = lectures.Lectures;
      this.dataSourceForLab.data = labs.Labs;
      this.isLoadData = true;
    });
  }

}
