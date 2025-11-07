import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payroll-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payroll-list.component.html',
  styleUrl: './payroll-list.component.css'
})
export class PayrollListComponent {
  summaryCards = [
    { title: 'Total Employee', value: 8450, icon: 'bi bi-gear text-primary fs-4' },
    { title: 'Total Paid', value: 150, icon: 'bi bi-person-check text-primary fs-4' },
    { title: 'Total Unpaid', value: 3130, icon: 'bi bi-person-x text-primary fs-4' },
    { title: 'Total Leave', value: 55, icon: 'bi bi-house-heart text-primary fs-4' },
  ];

  employees = [
    {
      empId: 'MZ-114',
      name: 'Sophia Williams',
      designation: 'Business Intelligence Analyst',
      email: 'name@example.com',
      joiningDate: 'Jan 14 2024',
      salary: 4500,
      status: 'Paid',
      image: 'assets/img/user1.jpg',
    },
    {
      empId: 'MZ-115',
      name: 'Sophia Williams',
      designation: 'Business Intelligence Analyst',
      email: 'name@example.com',
      joiningDate: 'Dec 30 2024',
      salary: 5480,
      status: 'Paid',
      image: 'assets/img/user2.jpg',
    },
    {
      empId: 'MZ-116',
      name: 'Sophia Williams',
      designation: 'Data Scientist',
      email: 'name@example.com',
      joiningDate: 'Dec 28 2024',
      salary: 7500,
      status: 'Paid',
      image: 'assets/img/user3.jpg',
    },
    {
      empId: 'MZ-117',
      name: 'Sophia Williams',
      designation: 'Data Scientist',
      email: 'name@example.com',
      joiningDate: 'Nov 28 2024',
      salary: 4500,
      status: 'Unpaid',
      image: 'assets/img/user4.jpg',
    },
  ];
}