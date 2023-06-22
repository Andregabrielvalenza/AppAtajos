import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaldoBajoPage } from './saldo-bajo.page';

const routes: Routes = [
  {
    path: '',
    component: SaldoBajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaldoBajoPageRoutingModule {}
