import { Component } from '@angular/core';
import { FavoritesService } from '../../core/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  constructor(public favoritesService: FavoritesService) {}

  removeFavorite(id: number) {
    this.favoritesService.removeFavorite(id);
  }
}
