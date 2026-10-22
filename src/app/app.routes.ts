import { Routes } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao/cadastrar-inscricao';
import { ListaInscricoes } from './lista-inscricoes/lista-inscricoes';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastrarInscricao },
  { path: 'lista', component: ListaInscricoes },
];