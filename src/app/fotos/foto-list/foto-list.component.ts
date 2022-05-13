import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.scss']
})
export class FotoListComponent implements OnInit, OnDestroy {

  titulo = 'AngularEstudo1';

  listaFotos: Foto[] = [];
  filtro: string = '';
  deboche: Subject<string> = new Subject<string>();
  temMais: boolean = true;
  usuarioNome: string = '';
  paginaAtual: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private fotoService: FotoService
    ) { }

  ngOnInit(): void {
    this.usuarioNome = this.activatedRoute.snapshot.params.usuarioNome;
    this.listaFotos = this.activatedRoute.snapshot.data.listaFotosResolve;
    this.deboche
      .pipe(debounceTime(300))
      .subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.deboche.unsubscribe();
  }

  load() {
    this.fotoService
      .listarFotosDoUsuarioPaginado(this.usuarioNome, ++this.paginaAtual)
      .subscribe(fotos => {
        this.listaFotos = this.listaFotos.concat(fotos);
        if (!fotos.length) this.temMais = false;
      });
  }
}
