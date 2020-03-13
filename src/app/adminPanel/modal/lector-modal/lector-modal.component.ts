import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/service/professor.service';

@Component({
  selector: 'app-lector-modal',
  templateUrl: './lector-modal.component.html',
  styleUrls: ['./lector-modal.component.css']
})
export class LectorModalComponent implements OnInit {

  lector: Professor;

  constructor(
    public profService: ProfessorService,
    public dialogRef: MatDialogRef<LectorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Professor) { }

  ngOnInit(): void {
  }

  addProfessor(lector: Professor) {
    this.profService.addProfessor(lector);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
