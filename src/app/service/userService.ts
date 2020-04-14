import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserActivity } from '../model/userActivity';
import { ResetPassword } from '../model/resetPassword';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    api = 'http://localhost:6478/Administration/';

    constructor(private http: HttpClient) {
    }

    getUserActivity(): Observable<UserActivity> {
        return this.http.get<UserActivity>(this.api + 'UserActivityJson');
    }

    resetPassword(passwordModel): Observable<ResetPassword> {
        return this.http.post<ResetPassword>(this.api + 'ResetPassword', passwordModel);
    }
}
