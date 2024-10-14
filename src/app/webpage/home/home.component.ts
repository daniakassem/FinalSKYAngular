import { Component } from '@angular/core';
import { EmployeeCardComponent } from '../../shared/employeecard/employeecard.component';
import { CommonModule } from '@angular/common';
import { RequestsCountComponent } from "../../shared/cardsvacation/cardsvacation.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent, RequestsCountComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
