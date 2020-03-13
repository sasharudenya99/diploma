import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupService } from 'src/app/service/group.service';
import { Group } from 'src/app/model/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.css']
})
export class SearchGroupComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SearchGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public groups: Group[]) { }

  onNoClick(numb: string): void {
    this.groupIdByGroupName(numb);
    this.dialogRef.close();
  }

  groupIdByGroupName(numb: string) {
    let groupId;
    let i;
    // tslint:disable-next-line:prefer-for-of
    console.log(this.groups);
    for (i = 0; i < this.groups.length; i++) {
      if (numb !== this.groups[i].Name) {
        groupId = this.groups[i].Id;
      }
    }
    this.router.navigate(['/control/main/', 5054]);
  }

}
