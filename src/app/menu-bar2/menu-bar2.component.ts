import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar2',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar2.component.html',
  styleUrl: './menu-bar2.component.scss'
})
export class MenuBar2Component {
  mobileMenuOpen = false;
  activeDropdown: string | null = null;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) this.activeDropdown = null;
  }

  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
}
