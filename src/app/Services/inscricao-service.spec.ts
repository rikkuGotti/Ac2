import { TestBed } from '@angular/core/testing';
import { InscricaoService } from './inscricao-service';

describe('InscricaoService', () => {
  let service: InscricaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscricaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add with status Pendente', () => {
    service.adicionar('Carlos Lima', 'carlos@email.com', 'Grêmio');
    expect(service.listar().length).toBe(1);
    expect(service.listar()[0].status).toBe('Pendente');
  });

  it('should confirm and remove', () => {
    service.adicionar('Ana Souza', 'ana@email.com', 'Vasco');
    const id = service.listar()[0].id;
    service.confirmarInscricao(id);
    expect(service.confirmadas).toBe(1);
    service.remover(id);
    expect(service.total).toBe(0);
  });
});