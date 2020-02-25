import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/group';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    api = 'https://educats.azurewebsites.net';

    constructor(private http: HttpClient) {
    }

    getGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.api + '/api/Administration/Groups');
    }

    getGroupById(groupId): Observable<Group> {
        return this.http.get<Group>(this.api + '/api/Administration/Group/' + groupId);
    }

    addGroup(group): Observable<Group> {
        return this.http.post<Group>(this.api + '/api/Administration/DeleteGroup/', group);
    }

    deleteGroup(groupId): Observable<void> {
        return this.http.delete<void>(this.api + '/api/Administration/DeleteGroup/' + groupId);
    }

}
