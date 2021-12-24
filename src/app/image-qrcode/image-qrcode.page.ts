import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import jsQR from "jsqr";
@Component({
  selector: 'app-image-qrcode',
  templateUrl: './image-qrcode.page.html',
  styleUrls: ['./image-qrcode.page.scss'],
})
export class ImageQrcodePage  {
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  newData: any = [];
  toastKind: any = { success: "success", warning: "warning", error: "danger" }
  loading: HTMLIonLoadingElement = null;
  constructor(
    private toastCtrl: ToastController,
    private plt: Platform,
    private alertCtrl: AlertController,
    ) 
    {
   
  }
  captureImage() {
    this.fileinput.nativeElement.click();
  }
  handleFile(files: FileList) {
    const file = files.item(0);
    var img = new Image();
    img.onload = () => {

      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
      if (code) {
          this.newData.push(code.data);
          this.showQrToast("Quét mã thành công", this.toastKind.success);
      }

    };
    img.src = URL.createObjectURL(file);
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
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

  async delete(data) {
    const alert = await this.alertCtrl.create({
      header: 'Delete QR Code?',
      message: 'Bạn có chắc chắn muốn xóa mã QR code này?',
      buttons: [

        {
          text: 'Hủy',
          role: 'Cancle'
        },
        {
          text: 'Đồng ý',
          role: 'Cancle',
          handler: (value: any) => {
            this.newData = this.newData.filter(c => c !== data);
          }
        }
      ]
    });

    await alert.present();
  }
}
