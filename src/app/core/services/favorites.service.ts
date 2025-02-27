import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoriteSubject = new BehaviorSubject<any | null>(null);
  favorite$ = this.favoriteSubject.asObservable();

  setFavorite(character: any) {
    this.favoriteSubject.next(character);
  }

  getFavorite() {
    return this.favoriteSubject.value;
  }
}
