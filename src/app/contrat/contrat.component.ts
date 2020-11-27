import { Component, OnInit } from '@angular/core';
import Globalize from "globalize";
import notify from 'devextreme/ui/notify';
import { EmploymentContract} from '../models/EmploymentContract';
import {ContractService} from '../services/worker/contract.service';
import {Workers} from '../models/Workers';
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
  employmentContract: EmploymentContract[];
  stateEmploymentContract: String[];
  statusEmploymentContract:String[];
  typeEmploymentContract: String[];
  workTimeEmploymentContract: String[];
  annexEmploymentContract: String[];
  contractWorker: any []= [];

  constructor(private contractService: ContractService) {
    this.employmentContract = [];


  }

  addEmploymentContract() {
    console.log(this.employmentContract);
   }

   ajoutContrat(){
    this.employmentContract.forEach(contractWorker => {
      contractWorker.startDateEmploymentContract = this.convertFormatDate(contractWorker.startDateEmploymentContract);
      contractWorker.endDateEmploymentContract = this.convertFormatDate(contractWorker.endDateEmploymentContract);
      contractWorker.stateEmploymentContract  = this.changeEnumAdmin(contractWorker.stateEmploymentContract);
      contractWorker.typeEmploymentContract  = contractWorker.typeEmploymentContract;
      contractWorker.statusEmploymentContract  = this.changeEnumAdmin(contractWorker.statusEmploymentContract);
      contractWorker.workTimeEmploymentContract  = this.changeEnumAdmin(contractWorker.workTimeEmploymentContract);

    //  contractWorker.worker = idWorker;

      console.log(contractWorker);
      this.contractService.addContract(contractWorker).subscribe(res => {
          console.log(res);
          notify("Contrat enregistré", "success", 3000);
        },
        error1 => {
          console.log(error1);

        }
      );
    });
      this.contractWorker = [];
    }
   changeEnumAdmin(val){
    if(val === "Validation à demander")
      return "Validation_a_demander";
    if(val ==="Validation en attente")
      return "Validation_en_attente";
    if(val === "Validé")
      return  "Validé";
    if(val === "Brouillon")
      return  "Brouillon";
    if(val === "En cours")
      return  "En_cours";
    if(val === "Terminé")
      return  "Terminé";
    if(val === "A_venir")
      return  "A venir";
    if(val === "Certificats médicaux")
      return  "Certificats_médicaux";

  if(val === "Temps Plein")
    return  "Temps_Plein";

  if(val === "Temps Partiel")
  return  "Temps_Partiel";

if(val === "Annexe 6")
return  "Annexe_6";

if(val === "Annexe 8")
return  "Annexe_8";
if(val === "Annexe 9")
return  "Annexe_9";

if(val === "Horraires régulière")
return  "Horaires_réguliers";

  }
  convertFormatDate(date){
    Globalize.locale('fr');
    let formatter = Globalize.dateFormatter();
    if( date != undefined) {
      if(typeof   date === 'string'  ||  date instanceof  String) {
        if ( date.split('/')[2].length < 4) {
          date = formatter(new Date( ));
        } else {
          date =  date;
        }
      }
      else {
        date  = formatter( date)
      }
    }
    else {
      date =  formatter(new Date());
    }
    return date;
  }


  ngOnInit() {
    this.stateEmploymentContract = [
      'Validation à demander',
      'Validation en attente',
      'Validé'


    ];
    this.statusEmploymentContract = [
      'Brouillon',
      'En cours',
      'Terminé',
     'A venir' ,

    ];
    this.typeEmploymentContract = [
      'CEE',
	   'CDD',
   	'CDI',
  	'CI',
  	'CA',
  	'CP'
    ];
    this.workTimeEmploymentContract = [
      'Temps plein',
	'Temps Partiel'
    ];
    this.annexEmploymentContract = [
      'Annexe 6',
      'Annexe 8',
      'Annexe 9',
      'Horraires régulière'
    ];
  }

}
