import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPefilUnoPageRoutingModule } from './crear-pefil-uno-routing.module';

import { CrearPefilUnoPage } from './crear-pefil-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPefilUnoPageRoutingModule
  ],
  declarations: [CrearPefilUnoPage]
})
export class CrearPefilUnoPageModule {}
