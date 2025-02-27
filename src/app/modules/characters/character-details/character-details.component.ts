import { Component, Input, OnChanges } from '@angular/core';
import { CharacterService } from '../../../core/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnChanges {
  @Input() character: any;
  originInfo: any = null;
  locationInfo: any = null;
  episodeInfo: any = null;

  constructor(private characterService: CharacterService) {}

  ngOnChanges(): void {
    if (this.character) {
      this.fetchCharacterDetails();
    }
  }

  fetchCharacterDetails(): void {
    // Obtener información de origen
    if (this.character.origin?.url) {
      this.characterService.getLocationByUrl(this.character.origin.url).subscribe(data => {
        this.originInfo = data;
      });
    } else {
      this.originInfo = { name: 'Desconocido', residents: [] };
    }

    // Obtener información de localización
    if (this.character.location?.url) {
      this.characterService.getLocationByUrl(this.character.location.url).subscribe(data => {
        this.locationInfo = data;
      });
    } else {
      this.locationInfo = { name: 'Desconocido', residents: [] };
    }

    // Obtener información de un episodio
    if (this.character.episode?.length > 0) {
      this.characterService.getEpisodeByUrl(this.character.episode[0]).subscribe(data => {
        this.episodeInfo = data;
      });
    } else {
      this.episodeInfo = { name: 'Sin episodios' };
    }
  }
}
