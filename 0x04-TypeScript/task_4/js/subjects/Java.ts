namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher() {
      if (!this.Teacher || this.teacher.experienceTeachingC === 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${Teacher.firstName}`;
    }
  }
}
