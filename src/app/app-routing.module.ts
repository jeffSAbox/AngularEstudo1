import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoEncontradoComponent } from './errors/nao-encontrado/nao-encontrado.component';

import { FotoListComponent } from './fotos/foto-list/foto-list.component';
import { FotoListResolve } from './fotos/foto-list/foto-list.resolve';

const routes: Routes = [
  { 
    path: 'listarfotos/:usuarioNome', 
    component: FotoListComponent,
    resolve: {
      listaFotosResolve: FotoListResolve
    }
  },
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
