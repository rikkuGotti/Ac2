import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../Services/inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
  styleUrl: './cadastrar-inscricao.css',
})
export class CadastrarInscricao {
  nome = '';
  email = '';
  time = '';
  readonly times = ['Grêmio', 'Corinthians', 'Vasco'];

  constructor(private inscricaoService: InscricaoService) {}

  cadastrar(): void {
    this.inscricaoService.adicionar(this.nome, this.email, this.time);
    this.nome = '';
    this.email = '';
    this.time = '';
  }
}