import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-leave-roaster',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './leave-roaster.component.html',
  styleUrls: ['./leave-roaster.component.css']
})
export class LeaveRoasterComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize Bootstrap dropdowns
    const dropdownEls = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownEls.forEach((el) => new Dropdown(el));
  }

  // ✅ Current month & year
  currentMonth: string = 'Aug 2024';

  // ✅ Filters
  selectedCompany = '';
  selectedDepartment = '';
  selectedBranch = '';
  selectedDesignation = '';
  selectedShiftType = '';

  // ✅ Dropdown options
  companies = ['ITS Squad', 'TechCorp', 'CodeBase'];
  departments = ['HR', 'Accounts', 'IT', 'Operations'];
  branches = ['Kangra', 'Delhi', 'Bangalore'];
  designations = ['Manager', 'Associate', 'Analyst'];
  shiftTypes = ['General', 'Morning', 'Afternoon', 'Night', 'Leave', 'WO'];

  // ✅ Weekdays for table header
  days: string[] = [
    'Thu 01', 'Fri 02', 'Sat 03', 'Sun 04',
    'Mon 05', 'Tue 06', 'Wed 07', 'Thu 08',
    'Fri 09', 'Sat 10', 'Sun 11', 'Mon 12'
  ];

  // ✅ Employees with shift schedules
  employees = [
    {
      name: 'Akash Tom',
      role: 'Administrative Officer',
      avatar: 'https://via.placeholder.com/40',
      shifts: [
        { label: 'General', time: '9:00 - 18:00', color: 'lightblue' },
        { label: 'General', time: '9:00 - 18:00', color: 'lightblue' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'General', time: '9:00 - 18:00', color: 'lightblue' },
        { label: 'General', time: '9:00 - 18:00', color: 'lightblue' },
        { label: 'General', time: '9:00 - 18:00', color: 'lightblue' },
        { label: 'General', time: '9:00 - 18:00', color: 'lightblue' },
        { label: 'Night Shift', time: '22:00 - 2:00', color: '#ffe5b4' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'Night Shift', time: '22:00 - 2:00', color: '#ffe5b4' }
      ]
    },
    {
      name: 'Florence Harmonio',
      role: 'Associate',
      avatar: '',
      shifts: [
        { label: 'Morning', time: '11:00 - 15:00', color: '#f8d7da' },
        { label: 'Morning', time: '11:00 - 15:00', color: '#f8d7da' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'Morning', time: '11:00 - 15:00', color: '#f8d7da' },
        { label: 'Privilege Leave', time: '', color: '#fde2e2' },
        { label: 'Privilege Leave', time: '', color: '#fde2e2' },
        { label: 'Privilege Leave', time: '', color: '#fde2e2' },
        { label: '', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' }
      ]
    },
    {
      name: 'Jornad Jibli',
      role: 'Analyst',
      avatar: '',
      shifts: [
        { label: 'Afternoon', time: '15:00 - 23:30', color: '#d6eaff' },
        { label: 'Afternoon', time: '15:00 - 23:30', color: '#d6eaff' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'Early Morning', time: '1:00 - 6:00', color: '#e3f2fd' },
        { label: 'Early Morning', time: '1:00 - 6:00', color: '#e3f2fd' },
        { label: 'Afternoon', time: '15:00 - 23:30', color: '#d6eaff' },
        { label: 'Afternoon', time: '15:00 - 23:30', color: '#d6eaff' },
        { label: '', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'WO', time: '', color: '' },
        { label: 'Early Morning', time: '1:00 - 6:00', color: '#e3f2fd' }
      ]
    }
  ];

  searchText = '';

  get filteredEmployees() {
    return this.employees.filter(e =>
      e.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // ✅ Drag-Drop logic
  dropShift(event: CdkDragDrop<any[]>, empIndex: number) {
    console.log('🟢 Drop event triggered:', event);

    const prevIndex = event.previousIndex;
    const currIndex = event.currentIndex;

    // Log which shifts are being swapped
    console.log(`Employee Index: ${empIndex}`);
    console.log(`Previous Index: ${prevIndex}, Current Index: ${currIndex}`);

    // Swap two shifts within same employee
    const shifts = this.employees[empIndex].shifts;
    [shifts[prevIndex], shifts[currIndex]] = [shifts[currIndex], shifts[prevIndex]];

    console.log('Updated Shifts:', shifts);
  }

  // ✅ Create button click handler
  onCreateShift() {
    alert('Open Add Shift Modal (to be implemented)');
  }
}
