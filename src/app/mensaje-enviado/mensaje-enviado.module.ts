import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeEnviadoPageRoutingModule } from './mensaje-enviado-routing.module';

import { MensajeEnviadoPage } from './mensaje-enviado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeEnviadoPageRoutingModule
  ],
  declarations: [MensajeEnviadoPage]
})
export class MensajeEnviadoPageModule {}
