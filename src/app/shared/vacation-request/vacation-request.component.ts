import { Component, OnInit } from '@angular/core';
import { VacationService } from '../../services/vacation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../../highlight.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacation-requests',
  templateUrl: './vacation-request.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightPipe, RouterLink], // Add HighlightPipe to imports
})
export class VacationRequestsComponent implements OnInit {
  vacations: any[] = [];
  filteredVacations: any[] = [];
  searchTerm: string = ''; // Track the search input

  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {
    this.vacations = this.vacationService.getVacations();
    this.filteredVacations = this.vacations.slice(0, 3); // Display only the first 3 vacations
  }

  // Filter the vacations based on search input
  filterVacations(): void {
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      const allMatches = this.vacations.filter((vacation) =>
        vacation.employeeName.toLowerCase().includes(search)
      );
      this.filteredVacations = allMatches.slice(0, 3); // Limit to first 3 matches
    } else {
      this.filteredVacations = this.vacations.slice(0, 3); // Reset to first 3 vacations
    }
  }

  approveRequest(id: number) {
    console.log(`Approved vacation with ID: ${id}`);
  }

  declineRequest(id: number) {
    console.log(`Declined vacation with ID: ${id}`);
  }
}
