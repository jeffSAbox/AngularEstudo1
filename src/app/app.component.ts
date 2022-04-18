import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'AngularEstudo1';

  listaFotos = [

    {
      url: "http://hd.wallpaperswide.com/thumbs/garden_flowers_5-t2.jpg",
      legenda: "flores"
    },
    {
      url: "http://hd.wallpaperswide.com/thumbs/space_aesthetic-t2.jpg",
      legenda: "espaco"
    },
    {
      url: "http://hd.wallpaperswide.com/thumbs/macos_big_sur_apple_abstract-t2.jpg",
      legenda: "abstrato"
    }

  ]

}
