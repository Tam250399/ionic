import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/service/api-service.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public apiKey :any;
  public newData : any = {TEN:''};
  constructor(public api: ApiServiceService) {

    
   }


  ngOnInit() {
  }
 

  Search() {
    if(this.apiKey == null){
      alert("chưa nhập mã tài sản")
  }else{
    this.api.newApi(this.apiKey).subscribe(result => {
      console.log(result);
      this.newData = result;
    })
  }
  }


}
