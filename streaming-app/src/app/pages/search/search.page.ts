import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ContentService } from '../../core/services/content.service';
import { Content, Genre } from '../../shared/models/content.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {
  searchQuery = '';
  results: Content[] = [];
  genres: Genre[] = [];
  selectedGenre: Genre | null = null;
  private searchSubject = new Subject<string>();

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.genres = this.contentService.getGenres();

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.contentService.search(query))
    ).subscribe(results => {
      this.results = results;
    });
  }

  onSearchInput(event: any) {
    this.searchQuery = event.target.value;
    this.searchSubject.next(this.searchQuery);
  }

  filterByGenre(genre: Genre) {
    if (this.selectedGenre === genre) {
      this.selectedGenre = null;
      this.contentService.getAll().subscribe(contents => {
        this.results = contents;
      });
    } else {
      this.selectedGenre = genre;
      this.contentService.getByGenre(genre).subscribe(contents => {
        this.results = contents;
      });
    }
  }

  clearFilters() {
    this.selectedGenre = null;
    this.searchQuery = '';
    this.results = [];
  }

  getGenreIcon(genre: Genre): string {
    const icons: Record<string, string> = {
      'Acción': 'flash',
      'Comedia': 'happy',
      'Drama': 'theater',
      'Terror': 'skull',
      'Ciencia Ficción': 'rocket',
      'Documentales': 'globe',
      'Thriller': 'eye',
      'Romance': 'heart',
      'Animación': 'color-palette'
    };
    return icons[genre] || 'film';
  }
}
