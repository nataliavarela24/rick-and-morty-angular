import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [CharacterListComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDividerModule
  ],
  exports: [CharacterListComponent, CharacterDetailsComponent]
})
export class CharactersModule {}
