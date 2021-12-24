import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, LoadingController, Platform, AlertController } from '@ionic/angular';
import jsQR from "jsqr";
import { ApiServiceService } from 'src/service/api-service.service';
import { environment } from 'src/environments/environment';
import {listTaiSan} from '../global/global';


@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})


export class QrCodePage {

  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult: any;
  hiddent: any;
  set_interval: any;
  newData: any = [];
  newDatas: any;
  toastKind: any = { success: "success", warning: "warning", error: "danger" }
  loading: HTMLIonLoadingElement = null;
  scanTime: any;
  
  guidKiemKe : any;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private plt: Platform,
    public api: ApiServiceService,
    private router: Router


  ) {
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('IOS');

    }
    this.nullStart();
  }

  ToSend() {

  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }



 async OpenDetail() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.guidKiemKe)     
        
      }
    }
    this.router.navigate(['kiemkelist'], navigationExtras);
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


  reset() {
  }



  async delete(data) {
    const alert = await this.alertCtrl.create({
      header: 'iCheck thông báo',
      message: 'Bạn muốn xóa lịch sử quét?',
      cssClass: 'alertCancel',
      mode: 'ios',
      buttons: [

        {
          text: 'Hủy bỏ',
          role: 'Cancle',
          cssClass: 'alertCancle'
        },
        {
          text: 'Đồng ý',
          role: 'Cancle',
          cssClass: 'alertButton',

          handler: (value: any) => {
            this.newData = this.newData.filter(c => c.data !== data.data);
          }
        }
      ]
    });

    await alert.present();
  }



  async stopScan() {
    const alert = await this.alertCtrl.create({
      header: 'Bạn muốn tắt camera à ??',
      // message: 'Bạn có chắc chắn muốn xóa mã QR code này?',
      buttons: [
        {
          text: 'Không tắt',
          role: 'Cancle',
          cssClass: 'alertCancle'
        },
        {
          text: 'Tắt',
          role: 'Cancle',
          cssClass: 'alertButton',
          handler: (value: any) => {
            this.scanActive = false;
          }
        }
      ]
    });
    await alert.present();

  }

  async nullscanner() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
    }
  }

  async nullStart() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.loading = await this.loadingCtrl.create({
      message: 'Vui lòng đợi...'
    });
    await this.loading.present();
    this.videoElement.play();
    requestAnimationFrame(this.nullscanner.bind(this));
  }

  async start() {
    this.scanResult = this.startScan();

  }

  async startScan() {
    var front = false;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: (front ? "user" : 'environment') }
    });

    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.loading = await this.loadingCtrl.create({
      message: 'Vui lòng đợi...'
    });
    await this.loading.present();
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }


  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
    
        this.scanActive = true;
        const loading = await this.loadingCtrl.create({
          message: 'đang xử lý dữ liệu'
        });
        await loading.present();
        this.api.newTaiSanKiemKe(code.data).subscribe(result => {  
          
          this.guidKiemKe = result;
          listTaiSan.GuidKiemKe = this.guidKiemKe.GUID;
          listTaiSan.Data = [];
          this.showQrToast("Dữ liệu tải lên thành công", this.toastKind.success);
          loading.dismiss();
        }, err => {
          this.showQrToast("Dữ liệu tải lên thất bại", this.toastKind.error);
          loading.dismiss();
        });

      
        var result = genCode(code.data);
        if (!(this.newData.filter(c => c.data == code.data).length > 0)) {
          this.newData.push(result);
          this.showQrToast("Quét mã thành công", this.toastKind.success);
        }
        else {
          this.showQrToast("Mã đã có trong danh sách", this.toastKind.error);
        }

      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
    function genCode(data) {
      var date = new Date();
      var timeScan = date.toLocaleString();
      return {
        data: data,
        timeScan: timeScan
      }
    }


  }


  }
