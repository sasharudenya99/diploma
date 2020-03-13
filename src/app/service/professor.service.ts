import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../model/professor';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    api = 'http://localhost:6478/Administration/';

    constructor(private http: HttpClient) {
    }

    getProfessors(): Observable<Professor[]> {
        return this.http.get<Professor[]>(this.api + 'GetProfessorsJson');
    }

    addProfessor(professor: Professor): Observable<Professor> {
        return this.http.post<Professor>(this.api + ' SaveProfessorJson/', professor);
    }

    editProfessor(professorId): Observable<void> {
        return this.http.delete<void>(this.api + 'DeleteLecturerJson' + professorId);
    }

    deleteProfessor(professorId): Observable<void> {
        return this.http.delete<void>(this.api + 'DeleteLecturerJson' + professorId);
    }

}
