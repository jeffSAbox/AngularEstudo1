import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Foto } from '../foto/foto';

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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listaFotos = this.activatedRoute.snapshot.data.listaFotosResolve;
    this.deboche
      .pipe(debounceTime(300))
      .subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.deboche.unsubscribe();
  }

}
