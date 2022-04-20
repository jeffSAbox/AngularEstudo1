import { Component, OnInit } from '@angular/core';
import { Foto } from './fotos/foto/foto';
import { FotoService } from './fotos/foto/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
