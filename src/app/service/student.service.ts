import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';
import { UserActivity } from '../model/userActivity';
import { Professor } from '../model/professor';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    api = 'https://educats.azurewebsites.net';

    constructor(private http: HttpClient) {
    }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.api + '/api/Administration/Students');
    }

    getStudentById(studentId): Observable<Student> {
        return this.http.get<Student>(this.api + '/api/Administration/Student/' + studentId);
    }

    deleteStudent(studentId): Observable<void> {
        return this.http.delete<void>(this.api + '/api/Administration/DeleteStudent/' + studentId);
    }

    getUserActivity(): Observable<UserActivity> {
        return this.http.get<UserActivity>(this.api + '/api/Administration/UserActivity');
    }
}
