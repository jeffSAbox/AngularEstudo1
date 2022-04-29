import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private fotoService: FotoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
      
    const nomeUsuario = this.activatedRoute.snapshot.params.usuarioNome;

    this.fotoService
      .listarFotosDoUsuario(nomeUsuario)
      .subscribe(foto => {
        this.listaFotos = foto;
      });

  }

}
