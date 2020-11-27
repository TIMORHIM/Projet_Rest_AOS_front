import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BankDetails} from '../../models/BankDetails';
import {Observable} from 'rxjs';
import {Address} from '../../models/Address';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BankDetailsService {
  private bankDetails = environment.ROOT +'/api/bankDetails/add';
  private bankDetailsPUTUrl = environment.ROOT +'/api/bankDetailsUpdate';

  constructor(private http: HttpClient) { }

  public addBankDetail(bankDetails: BankDetails):Observable<BankDetails> {
    return this.http.post<BankDetails>(this.bankDetails, bankDetails, httpOptions);
  }

  public updateBankDetail(bankDetails: BankDetails): Observable <BankDetails> {
    return this.http.put<BankDetails>(this.bankDetailsPUTUrl + '/' + bankDetails.idBankDetails, bankDetails, httpOptions);
  }
}
