import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiemkelistPage } from './kiemkelist.page';

const routes: Routes = [
  {
    path: '',
    component: KiemkelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KiemkelistPageRoutingModule {}
