import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaldoBajoPageRoutingModule } from './saldo-bajo-routing.module';

import { SaldoBajoPage } from './saldo-bajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaldoBajoPageRoutingModule
  ],
  declarations: [SaldoBajoPage]
})
export class SaldoBajoPageModule {}
