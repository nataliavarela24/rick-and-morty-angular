import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  origin: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private GRAPHQL_API = 'https://rickandmortyapi.com/graphql';
  private favoriteId: string | null = null;
  private favoriteSubject = new ReplaySubject<Character>(1);
  favorite$ = this.favoriteSubject.asObservable();

  constructor(private http: HttpClient) {}

  setFavorite(characterId: string) {
    this.favoriteId = characterId;
    this.fetchFavoriteCharacter();
  }

  fetchFavoriteCharacter() {
    if (!this.favoriteId) {
      console.error('❌ No hay un ID de personaje favorito definido.');
      return;
    }

    console.log('📡 Enviando consulta GraphQL para el ID:', this.favoriteId);

    const query = {
      query: `
        query GetCharacter($id: ID!) {
          character(id: $id) {
            id
            name
            status
            species
            image
            gender
            origin {
              name
            }
          }
        }
      `,
      variables: {
        id: this.favoriteId
      }
    };

    this.http.post<{ data: { character: Character } }>(this.GRAPHQL_API, query)
      .pipe(map(response => response.data.character))
      .subscribe(
        (character) => {
          console.log('✅ Personaje favorito recibido:', character);
          this.favoriteSubject.next(character);
        },
        (error) => {
          console.error('❌ Error obteniendo el personaje favorito:', error);
        }
      );
  }

  getFavorite(): Character | null {
    let currentFavorite: Character | null = null;
    this.favorite$.subscribe(favorite => currentFavorite = favorite);
    return currentFavorite;
  }
}
