import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeDashabordComponent } from './pages/employee-dashabord/employee-dashabord.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { LeaveRequestComponent } from './pages/leave-request/leave-request.component';
import { LeaveRoasterComponent } from './pages/leave-roaster/leave-roaster.component';
import { DailyPunchComponent } from './pages/daily-punch/daily-punch.component';
import { SalarySlipComponent } from './pages/salary-slip/salary-slip.component';
import { PayrollProcessComponent } from './pages/payroll-process/payroll-process.component';
import { AdminLeaveComponent } from './pages/admin-leave/admin-leave.component';
import { EmployeeAttendanceComponent } from './pages/employee-attendance/employee-attendance.component';
import { AdminAttendanceComponent } from './pages/admin-attendance/admin-attendance.component';
import { PayrollListComponent } from './pages/payroll-list/payroll-list.component';

export const routes: Routes = [
  // Default route → Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Main layout wrapper
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee-dashboard', component: EmployeeDashabordComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'leave-request', component: LeaveRequestComponent },
      {path: 'employee-attendance', component: EmployeeAttendanceComponent},
      {path: 'admin-attendance', component: AdminAttendanceComponent},
      {path: 'admin-leave', component: AdminLeaveComponent},
      { path: 'leave-roaster', component: LeaveRoasterComponent },
      { path: 'daily-punch', component: DailyPunchComponent },
      { path: 'salary-slip', component: SalarySlipComponent },
      { path: 'payroll-list', component: PayrollListComponent },
      { path: 'payroll-process', component: PayrollProcessComponent },
    ],
  },

  // Wildcard route → redirect unknown URLs to login
  { path: '**', redirectTo: 'login' },
];
