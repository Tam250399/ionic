import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plugins } from '@capacitor/core';
import { TaiSan } from 'src/app/models/taisan';
const { Storage } = Plugins;
const ACCESS_TOKEN_KEY = 'my-access-token';
const REFRESH_TOKEN_KEY = 'my-refresh-token';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentAccessToken = null;
  public kiemketaisan: any = '';
  public apiKey: any = '';
  public token: any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmltYXJ5c2lkIjoiMTQ3OCIsInByaW1hcnlncm91cHNpZCI6ImFjMDgwMmU1LWVjMzktZmI0My04ZWI4LTU3M2EzZTlkZWVkNiIsIm5hbWVpZCI6ImFucHgiLCJ1bmlxdWVfbmFtZSI6ImFuIiwibmJmIjoxNjM1MjE5NDAzLCJleHAiOjE2MzUyMjMwMDMsImlhdCI6MTYzNTIxOTQwMywiaXNzIjoiaHR0cHM6Ly90c2MubW9mLmdvdi52bi8iLCJhdWQiOiJodHRwczovL3RzYy5tb2YuZ292LnZuLyJ9.xZy1OdjMh4mPIVpQ1Jh-RxVWb-rIzLcsitNKqpEQxFw';
  constructor(private http: HttpClient) {

  }

  newApi(apiKey) {
    var httpOptions = this.getNewAccessToken();
    return this.http.get(`${API_URL}/api/TaiSanSvc/GetInfoTaiSan?MaTaiSan=` + apiKey, httpOptions)
  }


  newTaiSanKiemKe(kiemketaisan) {
    var httpOptions = this.getNewAccessToken();
    return this.http.get(`${API_URL}/api/KiemKe/GetTaiSanKiemKe?guid=` + kiemketaisan, httpOptions)
  }


  EditMataisan(data){
    var httpOptions = this.getNewAccessToken();
    let body = JSON.stringify(data)
    console.log("Body: ",body)
    return this.http.post(`${API_URL}/api/KiemKe/UpdateListTaiSanKiemKe`,body,httpOptions)
  }


  async loadToken() {
    const token = await Storage.get({ key: ACCESS_TOKEN_KEY });
    if (token && token.value) {
      this.currentAccessToken = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  getNewAccessToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      })
    }
    return httpOptions;
  }


  storeAccessToken(accessToken) {
    this.currentAccessToken = accessToken;
    return from(Storage.set({ key: ACCESS_TOKEN_KEY, value: accessToken }));
  }

}
