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

// ✅ Interface for Leave Records
interface LeaveRecord {
  type: string;
  duration: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
})
export class LeaveRequestComponent implements AfterViewInit, OnDestroy {
  // ✅ Leave records
  leaves: LeaveRecord[] = [
    {
      type: 'Medical Leave',
      duration: '19 Apr 2024 - 24 Apr 2024',
      days: 6,
      reason: 'Medical Leave',
      status: 'Pending',
    },
    {
      type: 'Personal Leave',
      duration: '15 Apr 2024 - 16 Apr 2024',
      days: 1,
      reason: 'Personal Leave',
      status: 'Approved',
    },
    {
      type: 'Sick Leave',
      duration: '10 Mar 2024 - 12 Mar 2024',
      days: 3,
      reason: 'Medical Condition',
      status: 'Rejected',
    },
    {
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
