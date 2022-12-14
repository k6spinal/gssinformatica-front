import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/view/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/view/home/home.component';
import { LivroReadAllComponent } from './components/view/livro/livro-read-all/livro-read-all.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categorias',
        component: CategoriaReadComponent
    },
    {
        path: 'categorias/create',
        component: CategoriaCreateComponent
    },
    {
        path: 'categorias/delete/:id',
        component: CategoriaDeleteComponent
    },
    {
        path: 'categorias/update/:id',
        component: CategoriaUpdateComponent
    },
    {
        path: 'categorias/:id_cat/livros',
        component: LivroReadAllComponent
    },
    {
        path: 'categorias/:id_cat/livros/create',
        component: LivroCreateComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }