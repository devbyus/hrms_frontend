import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-dashabord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-dashabord.component.html',
  styleUrl: './employee-dashabord.component.css'
})
export class EmployeeDashabordComponent {
stats = [
  {
    title: 'Total Hours Today',
    current: '8.36',
    total: '9',
    bg: 'bg-primary',
    icon: 'bi-clock-history',           // ⏰ clock-related
    trend: '5% This Week',
    trendIcon: 'bi-arrow-up-short',
    trendBg: 'bg-success'
  },
  {
    title: 'Total Hours Week',
    current: '10',
    total: '40',
    bg: 'bg-dark',
    icon: 'bi-calendar-week',           // 📅 week-based
    trend: '7% Last Week',
    trendIcon: 'bi-arrow-up-short',
    trendBg: 'bg-success'
  },
  {
    title: 'Total Hours Month',
    current: '75',
    total: '98',
    bg: 'bg-info',
    icon: 'bi-calendar-check',          // ✅ month completed hours
    trend: '8% Last Month',
    trendIcon: 'bi-arrow-down-short',
    trendBg: 'bg-danger'
  },
  {
    title: 'Overtime this Month',
    current: '16',
    total: '28',
    bg: 'bg-danger',
    icon: 'bi-stopwatch',               // ⏱ overtime
    trend: '6% Last Month',
    trendIcon: 'bi-arrow-down-short',
    trendBg: 'bg-danger'
  }
];

workSummary = [
  { label: 'Total Working Hours', value: '12h 36m', icon: 'ti ti-point-filled text-dark' },
  { label: 'Productive Hours', value: '08h 36m', icon: 'ti ti-point-filled text-success' },
  { label: 'Break Hours', value: '22m 15s', icon: 'ti ti-point-filled text-warning' },
  { label: 'Overtime', value: '02h 15m', icon: 'ti ti-point-filled text-info' }
];

timeScale = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00'];

}
