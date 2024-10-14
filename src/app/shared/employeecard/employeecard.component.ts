import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { RequestsCountComponent } from "../cardsvacation/cardsvacation.component";
import { NewsComponent } from "../news/news.component";
import { VacationRequestsComponent } from "../vacation-request/vacation-request.component";
@Component({
  selector: 'app-employee-card',
  standalone:true,
  templateUrl: './employeecard.component.html',
  imports: [RequestsCountComponent, NewsComponent, VacationRequestsComponent],
})
export class EmployeeCardComponent implements OnInit {
  employee: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployeeDetails();
  }
}
