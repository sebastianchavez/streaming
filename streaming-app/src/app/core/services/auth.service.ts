import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { MOCK_USERS } from '../../mock-data/users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser$ = new BehaviorSubject<User | null>(null);
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      const user = JSON.parse(stored);
      this.currentUser$.next(user);
      this.isAuthenticated$.next(true);
    }
  }

  login(email: string, password: string): Observable<User | null> {
    const user = MOCK_USERS.find(
      u => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser$.next(user);
      this.isAuthenticated$.next(true);
      return of(user).pipe(delay(500));
    }
    return of(null).pipe(delay(500));
  }

  register(name: string, email: string, password: string): Observable<User> {
    const newUser: User = {
      id: String(MOCK_USERS.length + 1),
      name,
      email,
      password,
      avatar: `https://picsum.photos/seed/${name}/150/150`,
      plan: 'Básico',
      memberSince: new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    };
    MOCK_USERS.push(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    this.currentUser$.next(newUser);
    this.isAuthenticated$.next(true);
    return of(newUser).pipe(delay(500));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser$.next(null);
    this.isAuthenticated$.next(false);
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  getSnapshot(): User | null {
    return this.currentUser$.value;
  }
}
