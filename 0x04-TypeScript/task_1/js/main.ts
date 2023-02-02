export interface Teacher {
  const firstName: string;
  const lastName: string;
  const fullTimeEmployee: boolean;
  const yearsOfExperience: number | undefined;
  const location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  const numberOfReports: number;
}

export function printTeacher (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export class StudentClass {
  constructor (firstName: string, lastName: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework (): string {
    return 'Currently working';
  }
  displayName (): string {
    return `${this.firstName}`;
  }
}
