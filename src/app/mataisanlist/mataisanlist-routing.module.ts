import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MataisanlistPage } from './mataisanlist.page';

const routes: Routes = [
  {
    path: '',
    component: MataisanlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MataisanlistPageRoutingModule {}
