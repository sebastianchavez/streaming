import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { Content, Genre } from '../../shared/models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  featured: Content[] = [];
  trending: Content[] = [];
  topRated: Content[] = [];
  action: Content[] = [];
  comedy: Content[] = [];
  drama: Content[] = [];
  horror: Content[] = [];
  sciFi: Content[] = [];
  documentaries: Content[] = [];
  series: Content[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getFeatured().subscribe(data => this.featured = data);
    this.contentService.getTrending().subscribe(data => this.trending = data);
    this.contentService.getTopRated().subscribe(data => this.topRated = data);
    this.contentService.getByGenre('Acción').subscribe(data => this.action = data);
    this.contentService.getByGenre('Comedia').subscribe(data => this.comedy = data);
    this.contentService.getByGenre('Drama').subscribe(data => this.drama = data);
    this.contentService.getByGenre('Terror').subscribe(data => this.horror = data);
    this.contentService.getByGenre('Ciencia Ficción').subscribe(data => this.sciFi = data);
    this.contentService.getByGenre('Documentales').subscribe(data => this.documentaries = data);
    this.contentService.getByType('series').subscribe(data => this.series = data);
  }

  get currentFeatured(): Content | null {
    return this.featured.length > 0 ? this.featured[0] : null;
  }
}
