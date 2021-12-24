import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-kiemkelist',
  templateUrl: './kiemkelist.page.html',
  styleUrls: ['./kiemkelist.page.scss'],
})
export class KiemkelistPage implements OnInit {
  scanTime: any;
  data: any;
  dataNull:any;
  constructor(public router: Router,private route: ActivatedRoute) { 


    this.route.queryParams.subscribe(params => {
      if( params && params.special){
        this.data = JSON.parse (params.special);
      }
    });
  }

  ngOnInit() {
  }




  StartKiemKeMaTaiSan(){
    let navigationExtras : NavigationExtras ={
      queryParams: {
      special:'special'
      }
    }
    this.router.navigate(['mataisanlist'],navigationExtras);
  }


}
