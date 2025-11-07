import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-attendance.component.html',
  styleUrl: './admin-attendance.component.css'
})
export class AdminAttendanceComponent {
  summaryCards = [
    { title: 'Total Employee', value: 850, change: 5.15, icon: 'bi bi-people' },
    { title: 'Total Present', value: 150, change: -5.5, icon: 'bi bi-person-check' },
    { title: 'Total Half Day', value: 3130, change: 10, icon: 'bi bi-person-workspace' },
    { title: 'On Leave Employee', value: 55, change: 2.15, icon: 'bi bi-airplane' },
  ];

  days = Array.from({ length: 31 }, (_, i) => i + 1);

  employees = [
    {
      name: 'Alexander Smith',
      image: 'assets/img/user1.jpg',
      attendance: ['P', 'P', 'P', 'P', 'P', 'HD', 'P', 'H', 'P', 'P', 'L', 'P', 'A', 'P', 'P', 'OL', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'H', 'P', 'P', 'P', 'P'],
    },
    {
      name: 'Amelia Gonzalez',
      image: 'assets/img/user2.jpg',
      attendance: ['P', 'P', 'P', 'A', 'H', 'P', 'P', 'OL', 'P', 'P', 'P', 'L', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'H', 'P', 'OL', 'P', 'A', 'P', 'P', 'P', 'P'],
    },
    {
      name: 'Ava Garcia',
      image: 'assets/img/user3.jpg',
      attendance: ['P', 'P', 'P', 'A', 'P', 'P', 'L', 'P', 'OL', 'P', 'P', 'H', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'H', 'P', 'OL', 'A', 'P', 'P', 'P', 'P', 'P', 'P'],
    },
  ];
}