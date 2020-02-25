import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Professor } from '../model/professor';
import { ProfessorService } from '../service/professor.service';

export class ProfessorServiceData implements OnDestroy {
    private subscription: Subscription[] = [];
    editProfessor: Professor = new Professor();
    public allProfessor: Professor[];
    public professorById: Professor;
    public isLoad = false;

    constructor(private professorService: ProfessorService) {
        this._loadProfessors();
    }

    public _loadProfessors() {
       this.professorService.getProfessors().subscribe(professors => {
            this.allProfessor = professors;
            this.isLoad = true;
        });
    }

    public _deleteStudent(professorId) {
       this.professorService.deleteProfessor(professorId).subscribe(() => {
            this._updateProfessor();
            this._refreshProfessor();
        });
    }

    _updateProfessor(): void {
        this._loadProfessors();
    }

    _refreshProfessor(): void {
        this.editProfessor = new Professor();
    }

    ngOnDestroy(): void {
        this.subscription.forEach(subscription =>
            subscription.unsubscribe());
    }

}
