import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { VacationHistoryComponent } from "../history/vacation-history.component";
import { PendingRequestsComponent } from "../pendeing/pendeing.component";
@Component({
  selector: 'app-employee-card-profile',
  standalone:true,
  templateUrl: './employeeprofile.component.html',
  styleUrls:['./employeeprofile.component.css'],
  imports: [VacationHistoryComponent, PendingRequestsComponent],
})
export class EmployeeprofileComponent implements OnInit {
  employee: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployeeDetails();
  }
}
