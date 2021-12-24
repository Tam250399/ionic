import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,NgxQRCodeModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [

    StatusBar,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},BarcodeScanner,Base64ToGallery
  
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
