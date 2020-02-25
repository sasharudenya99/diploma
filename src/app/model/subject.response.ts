export class SubjectResponse {
    Code: string;
    Message: string;
    Subjects: Subject[];
}

export class Subject {
    Id: number;
    IsNeededCopyToBts: boolean;
    Name: string;
    ShortName: string;
}
