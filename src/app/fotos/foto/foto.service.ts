import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "./foto";

const urlAPI = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class FotoService
{
    constructor(private http: HttpClient)
    {
        // ...
    }

    listarFotosDoUsuario(usuarioNome: string)
    {
        return this.http.get<Foto[]>(urlAPI + usuarioNome + "/photos");
    }

    listarFotosDoUsuarioPaginado(usuarioNome: string, pagina: number)
    {
        const parametros = new HttpParams()
            .append('page', pagina.toString());

        return this.http.get<Foto[]>(urlAPI + usuarioNome + "/photos", { params: parametros });
    }
}