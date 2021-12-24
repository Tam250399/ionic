import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaiSanKiemKePageRoutingModule } from './tai-san-kiem-ke-routing.module';

import { TaiSanKiemKePage } from './tai-san-kiem-ke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaiSanKiemKePageRoutingModule
  ],
  declarations: [TaiSanKiemKePage]
})
export class TaiSanKiemKePageModule {}
