import { Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { NouveautesComponent } from '../nouveautes/nouveautes.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ArticleComponent } from "../article/article.component";
import { SectionComponent } from "../section/section.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionComponent, ArticleComponent, PresentationComponent, NouveautesComponent, CarouselComponent, ArticleComponent, SectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
