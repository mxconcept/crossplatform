// Інтерфейси
export interface IEmployee {
  work(): void;
  takeBreak(): void;
}

export interface IManager {
  manageEmployees(): void;
  assignTasks(): void;
}

//базовий клас Employee
export class Employee implements IEmployee {
  work(): void {
      console.log("Employee is working...");
  }

  takeBreak(): void {
      console.log("Employee is taking a break...");
  }
}


export class HumanResources extends Employee implements IManager {
  manageEmployees(): void {
      console.log("HumanResources is managing employees...");
  }

  assignTasks(): void {
      console.log("HumanResources is assigning tasks...");
  }
}

export class Engineer extends Employee {
  fixProblems(): void {
      console.log("Engineer is fixing problems...");
  }

  planSolutions(): void {
      console.log("Engineer is planning solutions...");
  }
}

export class Administration implements IEmployee, IManager {
  work(): void {
      console.log("Administration is working...");
  }

  takeBreak(): void {
      console.log("Administration is taking a break...");
  }

  manageEmployees(): void {
      console.log("Administration is managing employees...");
  }

  assignTasks(): void {
      console.log("Administration is assigning tasks...");
  }
}
