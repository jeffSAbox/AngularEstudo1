import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foto } from '../../foto/foto';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnChanges {

  @Input() fotos: Foto[] = [];
  linhas: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.fotos)
      this.linhas = this.organizarLinhasColunas(this.fotos); 
  }

  organizarLinhasColunas(fotos: Foto[]): any[]
  {
    var novasLinhas = [];

    for(let i = 0; i < fotos.length; i+=3)
    {
      novasLinhas.push(fotos.slice(i, i+3));
    }

    return novasLinhas;
  }

}
