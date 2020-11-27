import { Injectable } from '@angular/core';
import {Address} from '../../models/Address';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addressUrl = environment.ROOT +'/api/address';

  constructor(private http: HttpClient) { }

  public addAdress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.addressUrl, address, httpOptions);
  }

  public updateAddress(address: Address): Observable <Address> {
    return this.http.put<Address>(this.addressUrl + '/' + address.idAddress, address, httpOptions);
  }
}
