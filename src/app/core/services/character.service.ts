import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  // Obtener lista de personajes con filtros opcionales
  getCharacters(filters: { name?: string; status?: string }): Observable<any> {
    let url = `${this.BASE_URL}/character?`;
    if (filters.name) url += `name=${filters.name}&`;
    if (filters.status) url += `status=${filters.status}&`;
    return this.http.get<any>(url);
  }

  // Obtener personaje por ID
  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/character/${id}`);
  }

  // Obtener información de ubicación por URL
  getLocationByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  // Obtener información de episodio por URL
  getEpisodeByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
