import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id_categoriadespesa: '',
    descricao: '',
    dataCadastro: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoria.id_categoriadespesa = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id_categoriadespesa!).subscribe((resposta) => {
      this.categoria = resposta;
//      this.categoria.id_categoriadespesa = resposta.id_categoriadespesa;
//      this.categoria.descricao = resposta.descricao;
//      this.categoria.dataCadastro = resposta.dataCadastro;
    })

  }

  update(): void {
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias']);
      this.service.mensagem('Categoria atualizada com sucesso');
    }, err => {
      console.log(err)
    })
  }


}