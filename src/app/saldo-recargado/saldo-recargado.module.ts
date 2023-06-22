import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaldoRecargadoPageRoutingModule } from './saldo-recargado-routing.module';

import { SaldoRecargadoPage } from './saldo-recargado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaldoRecargadoPageRoutingModule
  ],
  declarations: [SaldoRecargadoPage]
})
export class SaldoRecargadoPageModule {}
