import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoListComponent } from './fotos/foto-list/foto-list.component';

const routes: Routes = [
  { path: 'listarfotos', component: FotoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
