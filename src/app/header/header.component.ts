import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { Navbar2Component } from '../navbar2/navbar2.component';
import { MenuBar2Component } from '../menu-bar2/menu-bar2.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Navbar2Component, MenuBar2Component, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
