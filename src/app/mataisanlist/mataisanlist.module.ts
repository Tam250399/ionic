import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MataisanlistPageRoutingModule } from './mataisanlist-routing.module';

import { MataisanlistPage } from './mataisanlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MataisanlistPageRoutingModule
  ],
  declarations: [MataisanlistPage]
})
export class MataisanlistPageModule {}
