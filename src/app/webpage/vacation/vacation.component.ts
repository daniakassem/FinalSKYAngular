import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HighlightPipe } from '../../highlight.pipe';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css'],
  standalone: true, // Mark this component as standalone
  imports: [CommonModule, FormsModule, HighlightPipe] 
})
export class VacationComponent {
  searchTerm: string = '';
  selectAll: boolean = false;

  // Add any additional logic for the component


  vacationRequests = [
    {
      name: 'Sarah Parker',
      submittedOn: '1/3/2024',
      duration: '3 Weeks (1/4/2023 - 22/4/2023)',
      salary: '1050 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false // Add 'selected' property
    },
    {
      name: 'Emily Davis',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false // Add 'selected' property
    },
    {
      name: 'Olivia Brown',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false // Add 'selected' property
    },
    {
      name: 'Sophia Harris',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',

      selected: false // Add 'selected' property
    },
    {
      name: 'Emma Wilson',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',

      selected: false // Add 'selected' property
    },
    {
      name: 'Isabella Martinez',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',

      selected: false // Add 'selected' property
    },
    {
      name: 'Mia Thompson',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',

      selected: false // Add 'selected' property
    },
    {
      name: 'Charlotte Clark',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false // Add 'selected' property
    },
    
  ];

  // Filter function
  filterRequests() {
    return this.vacationRequests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Handle "Select All" checkbox
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }
}
