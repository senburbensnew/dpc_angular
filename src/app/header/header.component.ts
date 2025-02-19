import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { Navbar2Component } from '../navbar2/navbar2.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, Navbar2Component, MenuBarComponent, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
