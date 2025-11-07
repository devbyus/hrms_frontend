import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payroll-process',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payroll-process.component.html',
  styleUrls: ['./payroll-process.component.css']
})
export class PayrollProcessComponent {
  selectedYear = 2025;
  selectedSubUnit = 'V-Weave';
  selectedCategory = 'All';
  months = [
    { name: 'Jan', year: 2025, status: 'Complete' },
    { name: 'Feb', year: 2025, status: 'Complete' },
    { name: 'Mar', year: 2025, status: 'Complete' },
    { name: 'Apr', year: 2025, status: 'Complete' },
    { name: 'May', year: 2025, status: 'Complete' },
    { name: 'Jun', year: 2025, status: 'Complete' },
    { name: 'Jul', year: 2025, status: 'Complete' },
    { name: 'Aug', year: 2025, status: 'Upcoming' },
    { name: 'Sep', year: 2025, status: 'Upcoming' },
    { name: 'Oct', year: 2025, status: 'Upcoming' },
    { name: 'Nov', year: 2025, status: 'Upcoming' },
    { name: 'Dec', year: 2025, status: 'Upcoming' }
  ];

  payrollSummary = {
    totalEmployees: 76,
    calendarDays: 31,
    payrollProcessed: 76,
    totalCost: 2533045,
    netPay: 2201492,
    employeeContrib: 181990,
    employerContrib: 149563
  };

  payrollActions = [
    { title: 'Leave', icon: 'bi-umbrella', done: true, by: 'Surjeet Singh Jangra', date: '29 Jul 2025' },
    { title: 'Attendance', icon: 'bi-calendar-check', done: true, by: 'Surjeet Singh Jangra', date: '29 Jul 2025' },
    { title: 'New Employees', icon: 'bi-person-plus', done: true, by: 'Surjeet Singh Jangra', date: '29 Jul 2025' },
    { title: 'Exit Employees', icon: 'bi-person-x', done: true, by: 'Surjeet Singh Jangra', date: '29 Jul 2025' },
    { title: 'Salaries On Hold', icon: 'bi-cash-stack', done: true, by: 'Surjeet Singh Jangra', date: '29 Jul 2025' },
    { title: 'Renew All Employees', icon: 'bi-arrow-repeat', done: true, by: 'Surjeet Singh Jangra', date: '29 Jul 2025' }
  ];
}
