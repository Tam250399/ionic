import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ApiServiceService } from 'src/service/api-service.service';
import { environment } from 'src/environments/environment';
import { ListTaiSan, TaiSan } from '../models/taisan';
import {listTaiSan} from '../global/global';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  TaiSan: TaiSan;
  TrangThai = 0;
  GhiChu = '';
  mataisanlist: any;
  toastKind: any = { success: "success", warning: "warning", error: "danger" }
  passedId: any;
  constructor(private navParams: NavParams,
    private modal: ModalController,
    private api: ApiServiceService,
    private route: Router,
    private zone: NgZone,
    public fb: FormBuilder,
    private toastCtrl: ToastController,
  ) {

    this.passedId = JSON.parse(this.navParams.get('mataisanId'))
    console.log(this.passedId)
  }

  ngOnInit() {


  }



  Clone() {
    this.modal.dismiss();
  }

  async showQrToast(message, color) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      color: color,
      position: 'top',
    });
    await toast.present();
  }



  AddMaTaiSan() {
    const taiSan: TaiSan = {
      TEN: this.passedId.TEN,
      MA: this.passedId.MA,
      TRANG_THAI_ID: this.TrangThai,
      GHI_CHU: this.GhiChu
    }
    listTaiSan.Data.push(taiSan);
    this.modal.dismiss();
  }
}
