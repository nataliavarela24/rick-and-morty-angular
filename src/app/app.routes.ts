import { Routes } from '@angular/router';
import { CharacterListComponent } from './modules/characters/character-list/character-list.component';
import { FavoritesComponent } from './modules/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: CharacterListComponent }, 
  { path: 'favoritos', component: FavoritesComponent }
];
