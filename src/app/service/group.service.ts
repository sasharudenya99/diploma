import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/group';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    api = 'http://localhost:6478/Administration/';

    constructor(private http: HttpClient) {
    }

    getGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.api + 'GetGroupsJson');
    }

    getGroupById(groupId): Observable<Group> {
        return this.http.get<Group>(this.api + 'GetGroupJson/' + groupId);
    }

    addGroup(group): Observable<Group> {
        return this.http.post<Group>(this.api + 'SaveGroupJson', group);
    }

    deleteGroup(groupId): Observable<void> {
        return this.http.delete<void>(this.api + '/api/Administration/DeleteGroup/' + groupId);
    }

}
