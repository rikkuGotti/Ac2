import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../Services/inscricao-service';

@Component({
  selector: 'app-lista-inscricoes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css',
})
export class ListaInscricoes {
  constructor(public inscricaoService: InscricaoService) {}
}