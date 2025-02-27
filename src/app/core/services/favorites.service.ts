import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<any[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  addFavorite(character: any) {
    const favorites = [...this.favoritesSubject.value, character];
    this.favoritesSubject.next(favorites);
  }

  removeFavorite(id: number) {
    const favorites = this.favoritesSubject.value.filter(c => c.id !== id);
    this.favoritesSubject.next(favorites);
  }
}
