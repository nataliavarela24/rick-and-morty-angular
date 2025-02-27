import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnChanges {
  @Input() characters: any[] = []; // 🔥 Recibe los personajes desde CharacterListComponent
  speciesCount: any = {};
  typeCount: any = {};

  ngOnChanges(): void {
    if (this.characters.length) {
      this.calculateTotals();
    }
  }

  // 🔥 Método para contar especies y tipos
  private calculateTotals(): void {
    this.speciesCount = this.characters.reduce((acc, char) => {
      acc[char.species] = (acc[char.species] || 0) + 1;
      return acc;
    }, {});

    this.typeCount = this.characters.reduce((acc, char) => {
      acc[char.type] = (acc[char.type] || 0) + 1;
      return acc;
    }, {});
  }
}
