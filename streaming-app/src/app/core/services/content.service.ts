import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Content, Genre } from '../../shared/models/content.model';
import { MOCK_CONTENTS } from '../../mock-data/contents';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private contents$ = new BehaviorSubject<Content[]>(MOCK_CONTENTS);

  getAll(): Observable<Content[]> {
    return this.contents$.asObservable();
  }

  getById(id: string): Observable<Content | undefined> {
    return this.contents$.pipe(
      map(contents => contents.find(c => c.id === id))
    );
  }

  getFeatured(): Observable<Content[]> {
    return this.contents$.pipe(
      map(contents => contents.filter(c => c.featured))
    );
  }

  getByGenre(genre: Genre): Observable<Content[]> {
    return this.contents$.pipe(
      map(contents => contents.filter(c => c.genre.includes(genre)))
    );
  }

  getByType(type: 'movie' | 'series'): Observable<Content[]> {
    return this.contents$.pipe(
      map(contents => contents.filter(c => c.type === type))
    );
  }

  getTopRated(): Observable<Content[]> {
    return this.contents$.pipe(
      map(contents => [...contents].sort((a, b) => b.rating - a.rating).slice(0, 10))
    );
  }

  getGenres(): Genre[] {
    return ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Documentales', 'Thriller', 'Romance', 'Animación'];
  }

  search(query: string): Observable<Content[]> {
    const q = query.toLowerCase().trim();
    if (!q) return of([]);
    return this.contents$.pipe(
      map(contents =>
        contents.filter(c =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.genre.some(g => g.toLowerCase().includes(q)) ||
          c.cast.some(a => a.toLowerCase().includes(q))
        )
      )
    );
  }

  getTrending(): Observable<Content[]> {
    return this.contents$.pipe(
      map(contents => contents.filter(c => c.year === 2025))
    );
  }

  getNewReleases(): Observable<Content[]> {
    return this.contents$.pipe(
      map(contents => [...contents].sort((a, b) => b.year - a.year).slice(0, 10))
    );
  }
}
