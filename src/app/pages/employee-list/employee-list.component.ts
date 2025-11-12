import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  // Store all employees
  employeeList: any[] = [];

  // Model for new employee
  newEmployee: any = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    joiningDate: '',
    phone: '',
    company: '',
    department: '',
    designation: ''
  };

  // Add Employee Function
  addEmployee() {
    if (this.newEmployee.firstName && this.newEmployee.email && this.newEmployee.employeeId) {
      // Push the model into list
      this.employeeList.push({ ...this.newEmployee });

      // Reset form
      this.newEmployee = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        employeeId: '',
        joiningDate: '',
        phone: '',
        company: '',
        department: '',
        designation: ''
      };

      // Close modal
      const modalEl = document.getElementById('add_employee');
      if (modalEl) {
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
        modalInstance.hide();
      }

      alert('✅ Employee added successfully!');
    } else {
      alert('⚠️ Please fill all required fields.');
    }
  }
}
