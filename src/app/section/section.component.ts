import { Component, Input } from '@angular/core';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() title: string = '';
}
