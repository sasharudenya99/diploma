import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../model/professor';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    api = 'https://educats.azurewebsites.net';

    constructor(private http: HttpClient) {
    }

    getProfessors(): Observable<Professor[]> {
        return this.http.get<Professor[]>(this.api + '/api/Administration/Professors');
    }

    deleteProfessor(professorId): Observable<void> {
        return this.http.delete<void>(this.api + '/api/Administration/DeleteLecturer/' + professorId);
    }

}
