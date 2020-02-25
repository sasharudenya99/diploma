import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() submitEM = new EventEmitter();

  foods: Food[] = [
    {value: '0', viewValue: '10702116'},
    {value: '1', viewValue: '109898'},
    {value: '2', viewValue: '1223234'}
  ];

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    surname: new FormControl(''),
    name: new FormControl(''),
    patronymic: new FormControl(''),
    groupNumber: new FormControl('')
  });

  constructor() { }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  ngOnInit() {
  }
}
