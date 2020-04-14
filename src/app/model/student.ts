export class Student {
    Avatar: any;
    Name: string;
    Surname: string;
    Patronymic: string;
    UserName: string;
    IsPasswordReset: boolean;
    Password: string;
    ConfirmPassword: string;
    Group: string;
    Email: string;
    Id: number;
    FullName: string;
    SkypeContact: string;
    Phone: string;
    About: string;
    LastLogin: string;
}

export class StudentByGroup {
    Students: Students[];
}

export class Students {
    Confirmed: boolean;
    FullName: string;
    GroupId: number;
    LabVisitingMark: string;
    LabsMarkTotal: string;
    Login: string;
    PracticalMarkTotal: string;
    PracticalVisitingMark: string;
    StudentId: number;
    StudentLabMarks: string;
    StudentPracticalMarks: string;
    SubgroupId: string;
    TestMark: string;
}
