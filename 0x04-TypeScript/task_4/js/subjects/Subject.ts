namespace Subjects {
  export class Subject {
    constructor(teacher: Students.Teacher) {
      this.teacher = teacher;
    }
    set setTeacher(teacher: Students.Teacher) {
      this.teacher = teacher;
    }
  }
}
