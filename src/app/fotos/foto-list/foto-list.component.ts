import { Component, OnInit } from '@angular/core';

import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.scss']
})
export class FotoListComponent implements OnInit {

  titulo = 'AngularEstudo1';

  listaFotos: Foto[] = [];

  constructor(private fotoService: FotoService) { }

  ngOnInit(): void {
      
    this.fotoService
      .listarFotosDoUsuario('flavio')
      .subscribe(foto => {
        this.listaFotos = foto;
      });

  }

}
