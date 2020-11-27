import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Workers} from '../../models/Workers';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workersUrl = environment.ROOT + '/api/workers';

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.workersUrl);
  }

  getWorker(id : number): Observable<Workers> {
    return this.http.get<Workers>(this.workersUrl + '/' + id);
  }

  addWorker(worker: Workers): Observable <Workers> {
    return this.http.post<Workers>(this.workersUrl, worker, httpOptions);
  }
  updateWorker(worker: Workers): Observable <Workers> {
      return this.http.put<Workers>(this.workersUrl + '/' + worker.idPerson, worker, httpOptions);
  }

  public deleteWorker(id: number){
    return this.http.delete(this.workersUrl + '/' + id);
  }

}
