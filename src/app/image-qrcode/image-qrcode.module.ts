import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageQrcodePageRoutingModule } from './image-qrcode-routing.module';

import { ImageQrcodePage } from './image-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageQrcodePageRoutingModule
  ],
  declarations: [ImageQrcodePage]
})
export class ImageQrcodePageModule {}
