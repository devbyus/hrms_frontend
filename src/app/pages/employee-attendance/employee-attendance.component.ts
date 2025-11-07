import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-attendance.component.html',
  styleUrl: './employee-attendance.component.css'
})
export class EmployeeAttendanceComponent {
  summaryCards = [
    { title: 'Total Complete Project', value: '23', change: 5.15, icon: 'bi bi-gear' },
    { title: 'Total Work Time', value: '39 Hrs : 54 Min', change: 5.15, icon: 'bi bi-clock-history' },
    { title: 'Total Break Time', value: '05 Hrs : 55 Min', change: -1.5, icon: 'bi bi-hourglass-split' },
    { title: 'Total Leave', value: '03 Days', change: 2.15, icon: 'bi bi-person' }
  ];

  days = Array.from({ length: 31 }, (_, i) => i + 1);

  employees = [
    {
      name: 'Emily Johnson',
      image: 'assets/img/user.jpg',
      attendance: [
        'P', 'P', 'L', 'P', 'A', 'H', 'D', 'P', 'P', 'OL',
        'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
        'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'
      ]
    }
  ];
}