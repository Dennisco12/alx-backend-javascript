namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React {
    getRequirements (){
      return `Here is the list of requirements for React`;
    }
    getAvailableTeacher() {
      if (this.Teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${Teacher.firstName}`;
    }
