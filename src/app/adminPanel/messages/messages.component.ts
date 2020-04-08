import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SendMessageComponent } from '../modal/send-message/send-message.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  panelOpenState = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  sendMessage() {
    const dialogRef = this.dialog.open(SendMessageComponent);
    dialogRef.afterClosed();
  }
}
