import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loginApi = environment.socketUrl;

  constructor(private http: HttpClient) {}

  login(payLoad: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('email', payLoad.email);
    queryParams = queryParams.set('password', payLoad.password);

    return this.http
      .get(`${this.loginApi}/users`, { params: queryParams })
      .pipe(
        map((data: any) => {
          if (data.length) {
            this.setsessionStorage(data[0]);
            return data[0];
          }
          return null;
        })
      );
  }

  setsessionStorage(data: any) {
    sessionStorage.setItem('userLoginCredential', JSON.stringify(data));
  }

  logout() {
    sessionStorage.removeItem('userLoginCredential');
  }
}
