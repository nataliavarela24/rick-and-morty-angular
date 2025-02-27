import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterGraphqlService {
  constructor(private apollo: Apollo) {}

  // Método para obtener detalles del personaje con GraphQL
  getCharacterDetails(id: number): Observable<any> {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          query getCharacterDetails($id: ID!) {
            character(id: $id) {
              id
              name
              image
              status
              species
              gender
              type
              origin {
                name
                residents {
                  name
                }
              }
              location {
                name
                residents {
                  name
                }
              }
              episode {
                name
              }
            }
          }
        `,
        variables: { id } // Pasamos el ID del personaje
      })
      .valueChanges.pipe(map((result) => result.data.character));
  }
}
