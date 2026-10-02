import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { Content, Genre } from '../../shared/models/content.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: false
})
export class CategoryPage implements OnInit {
  genre: Genre = 'Acción';
  contents: Content[] = [];

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    const genreParam = this.route.snapshot.paramMap.get('genre') as Genre;
    if (genreParam) {
      this.genre = genreParam;
      this.contentService.getByGenre(genreParam).subscribe(contents => {
        this.contents = contents;
      });
    }
  }
}
