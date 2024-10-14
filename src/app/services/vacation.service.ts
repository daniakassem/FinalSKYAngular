import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  private vacations = [
    {
      name: 'Sarah Parker',
      submittedOn: '1/3/2024',
      duration: '3 Weeks (1/4/2023 - 22/4/2023)',
      salary: '1050 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false, // Add 'selected' property
      status:'Approved',
    },
    {
      name: 'Emily Davis',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false, // Add 'selected' property
      status:'Pending',
    },
    {
      name: 'Olivia Brown',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 ',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/15735/15735384.png',
      selected: false, // Add 'selected' property
      status:'Declined',
    },
  ];

  constructor() {}

  // Get all vacation requests
  getVacations() {
    return this.vacations;
  }

  // Get only pending vacation requests
  getPendingRequests() {
    return this.vacations.filter((vacation) => vacation.status === 'Pending');
  }

  // Get all vacation history
  getHistory() {
    return this.vacations;
  }
}
