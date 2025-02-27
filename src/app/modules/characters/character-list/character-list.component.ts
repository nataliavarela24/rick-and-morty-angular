import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterService } from '../../../core/services/character.service';
import { FavoritesService } from '../../../core/services/favorites.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'species', 'type', 'gender', 'created', "favorite"];
  characters$ = new MatTableDataSource<any>();
  filters = { name: '', status: '' };
  selectedCharacter: any = null;

  speciesCount: any = {};
  typeCount: any = {};

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private characterService: CharacterService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters(this.filters).subscribe((response) => {
      this.characters$.data = response.results;
      this.characters$.paginator = this.paginator;

    });
  }

  updateFilters() {
    this.loadCharacters();
  }

  selectCharacter(character: any) {
    this.selectedCharacter = character;
  }

  markAsFavorite(character: any) {
    this.favoritesService.setFavorite(character);
  }

}

