import { Injectable } from '@angular/core';

export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  time: string;
  status: 'Pendente' | 'Confirmada';
}

@Injectable({ providedIn: 'root' })
export class InscricaoService {
  private inscricoes: Inscricao[] = [];
  private proximoId = 1;

  listar(): Inscricao[] {
    return this.inscricoes;
  }

  adicionar(nome: string, email: string, time: string): void {
    this.inscricoes.push({
      id: this.proximoId++,
      nome,
      email,
      time,
      status: 'Pendente',
    });
  }

  remover(id: number): void {
    this.inscricoes = this.inscricoes.filter((inscricao) => inscricao.id !== id);
  }

  confirmarInscricao(id: number): void {
    const inscricao = this.inscricoes.find((item) => item.id === id);
    if (inscricao) {
      inscricao.status = 'Confirmada';
    }
  }

  get total(): number {
    return this.inscricoes.length;
  }

  get confirmadas(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Confirmada').length;
  }

  get pendentes(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Pendente').length;
  }
}