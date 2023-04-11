import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBaseUrl;
  private apiSecret;
  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.apiBaseUrl = this.appConfig.getConfig().apiBaseUrl;
    this.apiSecret = this.appConfig.getConfig().apiSecret;
  }

  login(formData: FormGroup) {
    return this.http.post(this.apiBaseUrl + '/login', formData.value);
  }

  isLoggedIn() {
    return sessionStorage.getItem('token') != null;
  }

  logout() {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      ApiSecret: this.apiSecret,
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    });
    return this.http.get(this.apiBaseUrl + '/logout', { headers: headers });
  }
}
