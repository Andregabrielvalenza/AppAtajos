import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaldoRecargadoPage } from './saldo-recargado.page';

const routes: Routes = [
  {
    path: '',
    component: SaldoRecargadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaldoRecargadoPageRoutingModule {}
