import { Student } from './student';
import { Group } from '../adminPanel/group/group.component';

export class Professor {
    FullName: string;
    Login: string;
    LastLogin: string;
    Subjects: string;
    IsActive: boolean;
    Id: number;
    Number: number;
    IsSecretary: string;
    IsLecturerHasGraduateStudents: string;
    FirstName: string;
    LastName: string;
    Skill: string;
    MiddleName: string;
    User: Student;
    IsPasswordReset: string;
    Groups: Group[];
    modForAdd: boolean;
}
