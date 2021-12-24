import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KiemkelistPageRoutingModule } from './kiemkelist-routing.module';

import { KiemkelistPage } from './kiemkelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KiemkelistPageRoutingModule
  ],
  declarations: [KiemkelistPage]
})
export class KiemkelistPageModule {}
