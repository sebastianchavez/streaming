import { Component, Input } from '@angular/core';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content-carousel',
  templateUrl: './content-carousel.component.html',
  styleUrls: ['./content-carousel.component.scss'],
  standalone: false
})
export class ContentCarouselComponent {
  @Input() title = '';
  @Input() contents: Content[] = [];
  @Input() cardSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() showSeeAll = true;
  @Input() genre = '';
}
