import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true, // ✅ this line is very important
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isClosed = false;
  private activeSubmenu: HTMLElement | null = null;

  toggleSubmenu(event: Event, submenu: HTMLElement): void {
    event.stopPropagation();

    if (this.activeSubmenu && this.activeSubmenu !== submenu) {
      this.activeSubmenu.style.maxHeight = '';
      this.activeSubmenu.style.opacity = '0';
      this.activeSubmenu.parentElement?.classList.remove('showMenu');
    }

    const parentLi = submenu.closest('li');
    const isExpanded = parentLi?.classList.contains('showMenu');

    if (!isExpanded) {
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
      submenu.style.opacity = '1';
      parentLi?.classList.add('showMenu');
      this.activeSubmenu = submenu;
    } else {
      submenu.style.maxHeight = '';
      submenu.style.opacity = '0';
      parentLi?.classList.remove('showMenu');
      this.activeSubmenu = null;
    }
  }
}
