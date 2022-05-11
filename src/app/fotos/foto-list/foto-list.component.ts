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
  filtro: string = '';

  constructor(private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.listaFotos = this.activatedRoute.snapshot.data.listaFotosResolve;
  }

}
