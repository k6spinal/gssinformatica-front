import { Component, OnInit } from '@angular/core';
import { LancamentoService } from './lancamento.service';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  lancamentos = [];

  constructor(private lancamentoService : LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar()
      .then(() => null);
  }

}
