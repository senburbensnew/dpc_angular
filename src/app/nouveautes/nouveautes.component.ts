import { Component } from '@angular/core';
import { NouveauteComponent } from '../nouveaute/nouveaute.component';

@Component({
  selector: 'app-nouveautes',
  standalone: true,
  imports: [NouveauteComponent],
  templateUrl: './nouveautes.component.html',
  styleUrl: './nouveautes.component.scss'
})
export class NouveautesComponent {

}
