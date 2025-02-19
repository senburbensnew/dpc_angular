import { Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { NouveautesComponent } from '../nouveautes/nouveautes.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresentationComponent, NouveautesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
