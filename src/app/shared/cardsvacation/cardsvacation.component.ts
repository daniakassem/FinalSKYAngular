import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-requests-count',
  templateUrl: './cardsvacation.component.html',
  styleUrls: ['./cardsvacation.component.css'],
  standalone:true,
})
export class RequestsCountComponent {
  @Input() vacationRequestsCount: number = 10;  // Vacation requests count
  @Input() leaveRequestsCount: number = 10;     // Leave requests count
vacationRequests: any;
leaveRequests: any;
}
