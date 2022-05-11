import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Foto } from "../foto/foto";
import { FotoService } from '../foto/foto.service';

@Injectable({ providedIn: 'root' })
export class FotoListResolve implements Resolve<Observable<Foto[]>>
{

    constructor(private servico: FotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Foto[]>
    {
        const nomeUsuario = route.params.usuarioNome;
        return this.servico.listarFotosDoUsuario(nomeUsuario);
    }

}