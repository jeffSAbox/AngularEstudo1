import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar',
  templateUrl: './botao-carregar.component.html',
  styleUrls: ['./botao-carregar.component.scss']
})
export class BotaoCarregarComponent implements OnInit {

  @Input() temMais: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
