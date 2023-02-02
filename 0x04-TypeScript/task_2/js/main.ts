export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFormHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getToWork() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500){
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: Director | Teacher) {
  if (employee instanceof Director) {
    return true;
  } else {
    return false;
  }
}

export function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) {
    return workDirectorTasks();
  } else {
    return workTeacherTasks();
  }
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subject) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
