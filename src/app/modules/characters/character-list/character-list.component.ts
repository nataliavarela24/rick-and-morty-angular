import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../../../core/services/character.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'species', 'type', 'gender', 'created'];
  characters$ = new MatTableDataSource<any>(); // 🔥 No es un Observable, sino `MatTableDataSource`
  filters = { name: '', status: '' };
  selectedCharacter: any = null; // 🔥 Se agregó la variable

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private characterService: CharacterService) {}

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
}

