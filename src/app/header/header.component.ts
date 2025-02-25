import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, MenuBarComponent, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
