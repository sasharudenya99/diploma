import { Component, OnInit } from '@angular/core';
import { LectureService } from 'src/app/service/lecture.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { LabService } from 'src/app/service/lab.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  dataSourceForLab = new MatTableDataSource<object>();
  dataSourceForLecture = new MatTableDataSource<object>();

  constructor(private lectureService: LectureService, private labService: LabService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loadLecture(subjectId) {
    this.lectureService.getLectures(subjectId).subscribe(items => {
      this.dataSourceForLecture.data = items.Lectures;
    });
    return this.dataSourceForLecture;
  }

  loadLab(subjectId) {
    this.labService.getLabs(subjectId).subscribe(items => {
      this.dataSourceForLab.data = items.Labs;
    });
    return this.dataSourceForLab;
  }

  getParamIdFromUrl() {
    let subjectId;
    this.route.params.subscribe(params => subjectId = params.id);
    return subjectId;
  }

}
