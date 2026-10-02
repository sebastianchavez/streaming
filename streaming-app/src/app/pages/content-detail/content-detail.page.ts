import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { FavoritesService } from '../../core/services/favorites.service';
import { Content } from '../../shared/models/content.model';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.page.html',
  styleUrls: ['./content-detail.page.scss'],
  standalone: false
})
export class ContentDetailPage implements OnInit {
  content: Content | null = null;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contentService.getById(id).subscribe(content => {
        this.content = content || null;
      });

      this.favoritesService.isFavorite(id).subscribe(isFav => {
        this.isFavorite = isFav;
      });
    }
  }

  toggleFavorite() {
    if (this.content) {
      this.favoritesService.toggleFavorite(this.content);
      this.isFavorite = !this.isFavorite;
    }
  }

  playContent() {
    if (this.content) {
      this.router.navigate(['/player', this.content.id]);
    }
  }
}
