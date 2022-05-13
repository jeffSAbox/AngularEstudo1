import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FotoComponent } from "./foto/foto.component";
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotosComponent } from './foto-list/fotos/fotos.component';
import { filtrarPorDescricao } from "./foto-list/filtrar-por-descricao-pipe";
import { BotaoCarregarComponent } from './foto-list/botao-carregar/botao-carregar.component';

@NgModule({
    declarations: [ 
        FotoComponent,
        FotoListComponent,
        FotosComponent,
        filtrarPorDescricao,
        BotaoCarregarComponent
    ],
    imports: [ 
        HttpClientModule, 
        CommonModule
    ],
    exports: [ FotoComponent ]
})
export class FotosModule {}