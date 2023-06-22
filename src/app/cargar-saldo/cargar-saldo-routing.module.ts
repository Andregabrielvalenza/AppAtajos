import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarSaldoPage } from './cargar-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: CargarSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarSaldoPageRoutingModule {}
