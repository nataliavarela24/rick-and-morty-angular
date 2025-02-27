import { Component } from '@angular/core';
import { FavoritesService } from '../../core/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorite$ = this.favoritesService.favorite$;

  constructor(private favoritesService: FavoritesService) {}

  showFavoriteDetails() {
    const favorite = this.favoritesService.getFavorite();
    if (favorite) {
      alert(`Personaje Favorito:\n\nNombre: ${favorite.name}\nEstado: ${favorite.status}\nEspecie: ${favorite.species}`);
    }
  }
}
