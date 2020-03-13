import {OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

export class StudentServiceData implements OnInit, OnDestroy {
    private subscription: Subscription[] = [];
    allStudent: Student[];

    constructor(private studentService: StudentService) {
    }

    ngOnInit() {
        this._loadStudent();
    }

    _loadStudent(): void {
        this.subscription.push(this.studentService.getStudents().subscribe(students => {
                this.allStudent = students;
            },
            err => {
                throw err;
            }));
    }

    ngOnDestroy(): void {
        this.subscription.forEach(subscription =>
            subscription.unsubscribe());
    }

}
