import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarSaldoPageRoutingModule } from './cargar-saldo-routing.module';

import { CargarSaldoPage } from './cargar-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarSaldoPageRoutingModule
  ],
  declarations: [CargarSaldoPage]
})
export class CargarSaldoPageModule {}
