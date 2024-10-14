import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PendingRequestsComponent } from "../pendeing/pendeing.component";

@Component({
  selector: 'app-vacation-history',
  templateUrl: './vacation-history.component.html',
  standalone: true,
  imports: [CommonModule, PendingRequestsComponent]
})
export class VacationHistoryComponent {
[x: string]: any;
  vacations = [
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Sick Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Non Paid Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Sick Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
  ];
}
