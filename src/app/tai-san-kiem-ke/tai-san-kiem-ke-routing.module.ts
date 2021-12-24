import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaiSanKiemKePage } from './tai-san-kiem-ke.page';

const routes: Routes = [
  {
    path: '',
    component: TaiSanKiemKePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaiSanKiemKePageRoutingModule {}
