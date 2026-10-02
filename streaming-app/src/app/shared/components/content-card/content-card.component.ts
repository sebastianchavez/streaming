import { Component, Input } from '@angular/core';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  standalone: false
})
export class ContentCardComponent {
  @Input() content!: Content;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
