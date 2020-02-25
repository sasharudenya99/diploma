import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { UserActivity } from '../model/userActivity';

export class StudentServiceData implements OnDestroy {
    private subscription: Subscription[] = [];
    editStudent: Student = new Student();
    public allStudent: Student[];
    public studentById: Student;
    public userActivity: UserActivity;
    public isLoad = false;

    constructor(private studentService: StudentService) {
        this._loadStudent();
        this._loadUserActivity();
    }

    public _loadStudent() {
        this.subscription.push(this.studentService.getStudents().subscribe(students => {
            this.allStudent = students;
            this.isLoad = true;
        }));
    }

    public _studentById(studentId) {
        this.subscription.push(this.studentService.getStudentById(studentId).subscribe(student => {
            this.studentById = student;
            this.isLoad = true;
        }));
    }

    public _deleteStudent(studentId) {
        this.subscription.push(this.studentService.deleteStudent(studentId).subscribe(() => {
            this._updateStudent();
            this._refreshStudent();
        }));
    }

    public _loadUserActivity() {
        this.subscription.push(this.studentService.getUserActivity().subscribe(userActivity => {
            this.userActivity = userActivity;
            this.isLoad = true;
        }));
    }

    _updateStudent(): void {
        this._loadStudent();
    }

    _refreshStudent(): void {
        this.editStudent = new Student();
    }

    ngOnDestroy(): void {
        this.subscription.forEach(subscription =>
            subscription.unsubscribe());
    }

}
