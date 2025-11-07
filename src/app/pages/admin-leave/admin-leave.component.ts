import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import flatpickr from 'flatpickr';
import { Modal } from 'bootstrap';

interface LeaveRecord {
  employeeName: string;
  designation: string;
  type: string;
  duration: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-admin-leave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-leave.component.html',
  styleUrl: './admin-leave.component.css'
})
export class AdminLeaveComponent implements AfterViewInit, OnDestroy{
// ✅ Leave records
  leaves: LeaveRecord[] = [
  {
    employeeName: 'Rohit Sharma',
    designation: 'Software Engineer',
    type: 'Medical Leave',
    duration: '19 Apr 2024 - 24 Apr 2024',
    days: 6,
    reason: 'Medical Leave',
    status: 'Pending',
  },
  {
    employeeName: 'Neha Gupta',
    designation: 'HR Manager',
    type: 'Personal Leave',
    duration: '15 Apr 2024 - 16 Apr 2024',
    days: 1,
    reason: 'Personal Leave',
    status: 'Approved',
  },
  {
    employeeName: 'Vikram Singh',
    designation: 'Team Lead',
    type: 'Sick Leave',
    duration: '10 Mar 2024 - 12 Mar 2024',
    days: 3,
    reason: 'Medical Condition',
    status: 'Rejected',
  },
  {
    employeeName: 'Anjali Verma',
    designation: 'UI/UX Designer',
    type: 'Vacation Leave',
    duration: '01 May 2024 - 07 May 2024',
    days: 7,
    reason: 'Family Trip',
    status: 'Approved',
  },
];

  // ✅ Bootstrap Modal Refs
  @ViewChild('deleteModal') deleteModalRef!: ElementRef;
  @ViewChild('addModal') addModalRef!: ElementRef;

  private deleteModal!: Modal;
  private addModal!: Modal;
  selectedLeave?: LeaveRecord;

  // ✅ Lifecycle Hooks
  ngAfterViewInit(): void {
    // --- Initialize Bootstrap Modals
    this.deleteModal = new Modal(this.deleteModalRef.nativeElement);
    this.addModal = new Modal(this.addModalRef.nativeElement);

    // --- Initialize Flatpickr
    const numberDaysInput = document.getElementById(
      'numberDays'
    ) as HTMLInputElement;

    flatpickr('#dateDuration', {
      mode: 'range',
      dateFormat: 'F j, Y',
      minDate: 'today',
      onChange: (selectedDates) => {
        if (selectedDates.length === 2) {
          const [start, end] = selectedDates;
          const diffTime = end.getTime() - start.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
          numberDaysInput.value = diffDays.toString();
        } else {
          numberDaysInput.value = '';
        }
      },
    });
  }

  ngOnDestroy(): void {
    // nothing to clean up now
  }

  // ✅ Derived Counts
  get totalLeave(): number {
    return this.leaves.length;
  }
  get approvedLeave(): number {
    return this.leaves.filter((l) => l.status === 'Approved').length;
  }
  get pendingLeave(): number {
    return this.leaves.filter((l) => l.status === 'Pending').length;
  }
  get rejectedLeave(): number {
    return this.leaves.filter((l) => l.status === 'Rejected').length;
  }

  // ✅ Modal Handling
  openDeleteModal(leave: LeaveRecord) {
    this.selectedLeave = leave;
    this.deleteModal.show();
  }

  confirmDelete() {
    if (this.selectedLeave) {
      this.leaves = this.leaves.filter((l) => l !== this.selectedLeave);
      this.selectedLeave = undefined;
    }
    this.deleteModal.hide();
  }

  openAddModal() {
    this.addModal.show();
  }
}
