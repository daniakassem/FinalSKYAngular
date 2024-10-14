import { Component } from '@angular/core';
import { EmployeeprofileComponent } from "../../shared/employeeprofile/employeeprofile.component";
import { PendingRequestsComponent } from "../../shared/pendeing/pendeing.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [EmployeeprofileComponent, PendingRequestsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
