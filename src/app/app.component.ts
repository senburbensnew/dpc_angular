import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports : [HomeComponent],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'dpc';

  ngOnInit(): void {
    initFlowbite();
  }
}
