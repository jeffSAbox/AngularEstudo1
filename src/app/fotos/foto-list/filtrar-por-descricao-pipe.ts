import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto";

@Pipe({ name: 'filtrarPorDescricao' })
export class filtrarPorDescricao implements PipeTransform
{
    transform(fotos: Foto[], descricao: string) 
    {

        descricao = descricao
            .trim()
            .toLowerCase();

        if( descricao )
        {
            return fotos.filter(foto => {
                return foto.description
                    .toLowerCase()
                    .includes(descricao);
            });
        }
        else
        {
            return fotos;
        }
    }
}