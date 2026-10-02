import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content } from '../../shared/models/content.model';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favorites$ = new BehaviorSubject<Content[]>([]);
  private readonly STORAGE_KEY = 'streaming_favorites';

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.favorites$.next(JSON.parse(stored));
    }
  }

  private saveFavorites(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites$.value));
  }

  getFavorites(): Observable<Content[]> {
    return this.favorites$.asObservable();
  }

  isFavorite(contentId: string): Observable<boolean> {
    return this.favorites$.pipe(
      map(favs => favs.some(f => f.id === contentId))
    );
  }

  isFavoriteSnapshot(contentId: string): boolean {
    return this.favorites$.value.some(f => f.id === contentId);
  }

  toggleFavorite(content: Content): void {
    const current = this.favorites$.value;
    const exists = current.some(f => f.id === content.id);
    if (exists) {
      this.favorites$.next(current.filter(f => f.id !== content.id));
    } else {
      this.favorites$.next([...current, content]);
    }
    this.saveFavorites();
  }

  removeFavorite(contentId: string): void {
    this.favorites$.next(this.favorites$.value.filter(f => f.id !== contentId));
    this.saveFavorites();
  }
}
