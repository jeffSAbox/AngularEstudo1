import { Component, Input } from "@angular/core";

@Component({
    selector: 'ae-foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent
{
    titulo = "App: Angular Estudo 1";
    @Input() legenda = '';
    @Input() url = '';
}