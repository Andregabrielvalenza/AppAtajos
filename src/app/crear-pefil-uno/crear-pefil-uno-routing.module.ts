import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPefilUnoPage } from './crear-pefil-uno.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPefilUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPefilUnoPageRoutingModule {}
