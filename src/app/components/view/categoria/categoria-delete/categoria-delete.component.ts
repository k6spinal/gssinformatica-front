import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id_categoriadespesa: '',
    descricao: '',
    dataCadastro: ''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id_categoriadespesa = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id_categoriadespesa!).subscribe((resposta) => {
      this.categoria = resposta;
      console.log(resposta);
    })
  }

  delete(): void {
    this.service.delete(this.categoria.id_categoriadespesa!).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria excluída com sucesso.')
    })
  }
}
