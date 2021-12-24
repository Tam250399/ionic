import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageQrcodePage } from './image-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: ImageQrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageQrcodePageRoutingModule {}
