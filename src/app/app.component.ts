import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports : [HomeComponent, HeaderComponent, CarouselComponent, FooterComponent, RouterModule],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'dpc';

  ngOnInit(): void {
    initFlowbite();
  }
}
