import { Component, OnInit } from '@angular/core';
import { UserActivity } from 'src/app/model/userActivity';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userActivity: UserActivity;
  isLoad = false;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadActivity();
  }

  loadActivity() {
    this.userService.getUserActivity().subscribe(result => {
      this.userActivity = result;
      this.isLoad = true;
    });
  }

}
