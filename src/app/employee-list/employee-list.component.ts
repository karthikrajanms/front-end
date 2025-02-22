import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
 
  employees!: Employee[];

  constructor(private employeeService: EmployeeService){

  }

  ngOnInit(): void {
    this.getEmployees();
    // throw new Error('Method not implemented.');
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }
}
