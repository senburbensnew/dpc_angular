import { Component } from '@angular/core';
import { PresentationComponent } from '../../presentation/presentation.component';
import { NouveautesComponent } from '../../nouveautes/nouveautes.component';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ArticleComponent } from "../../article/article.component";
import { SectionComponent } from "../../section/section.component";
import { Part2Component } from "../../part2/part2.component";
import { Part3Component } from '../../part3/part3.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Part2Component, 
    Part3Component, 
    SectionComponent, 
    ArticleComponent, 
    PresentationComponent, 
    NouveautesComponent, 
    CarouselComponent, 
    ArticleComponent, 
    SectionComponent, 
    Part2Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
