import { Component, OnInit } from '@angular/core';
import { IEmployee, Employee, HumanResources, Engineer, Administration } from '../classes';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page implements OnInit {
  worker: Employee;
  hr: HumanResources;
  engineer: Engineer;
  administration: Administration;

  constructor() { 
    this.worker = new Employee();
    this.hr = new HumanResources();
    this.engineer = new Engineer();
    this.administration = new Administration();
  }

  ngOnInit() {
    this.worker.work();
    this.worker.takeBreak();
    this.hr.work();
    this.hr.takeBreak();
    this.hr.manageEmployees();
    this.hr.assignTasks();
    this.engineer.work();
    this.engineer.takeBreak();
    this.engineer.fixProblems();
    this.engineer.planSolutions();
    this.administration.work();
    this.administration.takeBreak();
    this.administration.manageEmployees();
    this.administration.assignTasks();
  }
}
