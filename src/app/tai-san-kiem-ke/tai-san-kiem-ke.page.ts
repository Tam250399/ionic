import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/service/api-service.service';

@Component({
  selector: 'app-tai-san-kiem-ke',
  templateUrl: './tai-san-kiem-ke.page.html',
  styleUrls: ['./tai-san-kiem-ke.page.scss'],
})
export class TaiSanKiemKePage implements OnInit {
  public  mataisan:any;
  public  makiemke:any;
  // public newData : any = {TEN:''};
  constructor(public api: ApiServiceService) { }

  ngOnInit() {
  }


  // Search() {
  //   if (this.mataisan == null || this.makiemke == null ) {
  //     alert("chưa nhập mã tài sản hoặc mã kiểm kê")
  //   } else {
  //     this.api.newTaiSanKiemKe(this.mataisan, this.makiemke).subscribe(result => {
  //       console.log(result);
  //       // this.newData = result;
  //     })
  //   }
  // }


}
