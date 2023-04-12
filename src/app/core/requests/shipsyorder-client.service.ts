import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipsyOrderListResponse } from '../models/shipsyorder/shipsyorder-list-response';
import { ShipsyOrder } from '../models/shipsyorder/shipsyorder';
import { Business } from '../models/shipsyorder/business';
import { BaseClient } from './base-client.service';

@Injectable()
export class ShipsyOrderClient extends BaseClient {
  public getBaseEndpoint() {
    return this.baseEndpoint + '/shipsy/orders';
  }

  public sendAgain(id: string): Observable<ShipsyOrder> {
    return this.http.get<ShipsyOrder>(this.getBaseEndpoint() + '/send/' + id, {
      headers: this.getHeaders(),
    });
  }

  public list(): Observable<ShipsyOrderListResponse> {
    return this.http.get<ShipsyOrderListResponse>(this.getBaseEndpoint(), {
      headers: this.getHeaders(),
    });
  }

  public show(id: string): Observable<ShipsyOrder> {
    return this.http.get<ShipsyOrder>(this.getBaseEndpoint() + '/' + id, {
      headers: this.getHeaders(),
    });
  }

  public store(formData: FormData): Observable<ShipsyOrder> {
    return this.http.post<ShipsyOrder>(this.getBaseEndpoint(), formData, {
      headers: this.getHeaders(false),
    });
  }

  public update(id: string | number, formData: FormData): Observable<ShipsyOrder> {
    formData.append('_method', 'PUT');
    return this.http.post<ShipsyOrder>(
      this.getBaseEndpoint() + '/' + id,
      formData,
      { headers: this.getHeaders(false) }
    );
  }

  public delete(id: string | number): Observable<any> {
    return this.http.delete<any>(this.getBaseEndpoint() + '/' + id, {
      headers: this.getHeaders(),
    });
  }

  public parent(scope: string): Observable<Array<ShipsyOrder>> {
    return this.http.get<Array<ShipsyOrder>>(
      this.getBaseEndpoint() + '?parent=1&pagination=0&scope=' + scope,
      { headers: this.getHeaders() }
    );
  }

  public all(scope: string): Observable<Array<ShipsyOrder>> {
    return this.http.get<Array<ShipsyOrder>>(
      this.getBaseEndpoint() + '?pagination=0&scope=' + scope,
      { headers: this.getHeaders() }
    );
  }

  public business(): Observable<Array<Business>> {
    return this.http.get<Array<Business>>(
      this.getBaseEndpoint() + '/business',
      { headers: this.getHeaders() }
    );
  }
}
