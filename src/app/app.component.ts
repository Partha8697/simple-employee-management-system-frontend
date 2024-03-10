import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public employeeList: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
      this.fetchEmployeeList();
  }

  public fetchEmployeeList(): void {
    this.employeeService.fetchEmployeeList().subscribe(
      (response: Employee[]) => {
       this.employeeList = response; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
