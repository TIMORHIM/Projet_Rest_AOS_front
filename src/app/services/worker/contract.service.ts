import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {EmploymentContract} from '../../models/EmploymentContract';
import { Workers } from 'src/app/models/Workers';
import {User} from '../../models/User';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private url = environment.ROOT + '/api/employmentContract';
  private contratPUTurl = environment.ROOT + '/api/employmentContract';
  private getByWorkerURL = environment.ROOT + '/api/employmentContract/getByWorker';
  private getMailSend = environment.ROOT + '/api/sendValidMail';
  private getUser = environment.ROOT + '/api/getUser';

  private contratUrl = environment.ROOT + '/api/employmentContract';

  constructor(private http: HttpClient) { }

  public addContract(employmentContract: EmploymentContract ): Observable<EmploymentContract>{
    return this.http.post<EmploymentContract>(this.url, employmentContract, httpOptions);
  }

  public getContractByWorker(worker: Workers):Observable<EmploymentContract[]>{
    return this.http.get<EmploymentContract[]>(this.getByWorkerURL + '/' + worker.idPerson);
  }

  updateContrat(contrat: EmploymentContract) {
    return this.http.put<EmploymentContract>(this.contratPUTurl + '/' + contrat.idEmploymentContract, contrat, httpOptions);
  }
  public sendMail(user: User, idPerson: number){
    return this.http.post(this.getMailSend + '/'+idPerson, JSON.stringify(user), httpOptions);
  }

  public getUserByStructure(idStructureAttached: number,idPerson: number): Observable<User> {
    return this.http.get<User>(this.getUser+'/'+idStructureAttached+'/'+idPerson);
  }

  public deleteContract(idContract: number){
    return this.http.delete(this.contratUrl + '/deleteEveryState/' + idContract);
  }
}
