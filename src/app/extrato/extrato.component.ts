import { Transferencia } from './../../../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

  deleteTransferencia(transferencia: Transferencia) {
    if (window.confirm('Deseja excluir essa transferência?') == true) {
      this.service.delete(transferencia).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
}
