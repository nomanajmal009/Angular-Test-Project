import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigService } from '../../app-config.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class BaseClient {    
    public baseEndpoint;
    constructor(protected http: HttpClient, protected appConfigService: AppConfigService) {
        this.baseEndpoint = this.appConfigService.getConfig().apiBaseUrl;
    }        

    protected getHeaders(jsonContent: boolean = true): HttpHeaders {
        const token = sessionStorage.getItem('token')
        let headers: any = { 'Authorization': 'Bearer ' + token };

        if(jsonContent) {
            headers['Content-Type'] = 'application/json';
        }

        return new HttpHeaders(headers);
    }    
}