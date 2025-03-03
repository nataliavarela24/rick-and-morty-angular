import { Component, ChangeDetectorRef } from '@angular/core';
import { FavoritesService } from '../../core/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorite: any = null;

  constructor(
    public favoritesService: FavoritesService,
    private cdr: ChangeDetectorRef // 🚨 Forzamos detección de cambios
  ) {
    this.favoritesService.favorite$.subscribe(favorite => {
      console.log('🟢 Personaje favorito actualizado en FavoritesComponent:', favorite);
      
      if (!favorite) {
        console.warn('⚠️ No se recibió un personaje válido en FavoritesComponent.');
        return;
      }

      this.favorite = favorite;
      this.cdr.detectChanges(); // 🚨 Forzar detección de cambios
    });
  }

  showFavoriteDetails() {
    if (this.favorite) {
      alert(`Personaje Favorito:\n\nNombre: ${this.favorite.name}\nEstado: ${this.favorite.status}\nEspecie: ${this.favorite.species}`);
    }
  }
}
