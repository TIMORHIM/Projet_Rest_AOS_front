import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Workers} from '../../models/Workers';
import {WorkerService} from '../../services/worker/worker.service';

import {BankDetails} from '../../models/BankDetails';
import {BankDetailsService} from '../../services/worker/bank-details.service';

import notify from 'devextreme/ui/notify';
import Globalize from "globalize";

import {AddressService} from '../../services/worker/address.service';
import {Address} from '../../models/Address';

import { EmploymentContract} from '../../models/EmploymentContract';
import {ContractService} from '../../services/worker/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {

  titles : { id : number, icon: string ,title: string }[];
  titles2 : { id : number ,title: string }[];
  worker : Workers;
  adress : Address;

  bankDetails: BankDetails;

  matricule = 'S';
  nationalit : string[];//{id: number, pays: string}[];
  contrat: string[];

  sex : string[];

  presentAbsent : string[];
  typeContrat :string [] = [];

  private situationFamil: string[];
  autre = false;
  private sexe: ({ type: string })[];
  employmentContract: EmploymentContract;


  //structureAttached: StructureAttached[] =[];
  stateEmploymentContract: String[];
  statusEmploymentContract:String[];
  typeEmploymentContract: String[];

  private listContrat: EmploymentContract;
  workTimeEmploymentContract: String[];
  annexEmploymentContract: String[];
  contractWorker: any []= [];
  titleDocs: { id : number, icon: string ,title: string }[];

  medicalVisits: any[] = [];
  nat: number = 0;
  private selectNationality: boolean= false;

  constructor(private workerService : WorkerService,
              private bankDetailsService : BankDetailsService,
              private addressService : AddressService,

              private contractService:ContractService,
              private ngZone:NgZone,
              private router:Router
)  {
    this.worker = new Workers();
    this.adress = new Address();

    this.medicalVisits = [];

    this.bankDetails = new BankDetails();
    this.employmentContract = new EmploymentContract();
    this.codePostalCustom =  this.codePostalCustom.bind(this);
    this.nationalityChanged = this.nationalityChanged.bind(this);

  }

  ngOnInit() {
    this.adress = new Address();
    this.titles = [
      {"id":1,"icon":"../../assets/icons/homme.png","title":"Informations"},
      {"id":4,"icon":"../../assets/icons/contraTravail.png","title":"Contrats de travail"}
    ];
    this.titles2 = [
      {"id":1,"title":"Informations personnelles"},
      {"id":2,"title":"Informations complémentaires"},
      {"id":3,"title":"Coordonnées"},
      {"id":4,"title":"Contact"},
      {"id":6,"title":"Coordonnées Bancaires"},
    ];
    this.titleDocs = [
      {"id":3,"icon":"../../assets/icons/documAdmin.png","title":"Documents Administratifs"},
      {"id":4,"icon":"../../assets/icons/contraTravail.png","title":"Contrats de travail"},
      {"id":5,"icon":"../../assets/icons/visitMedical.png","title":"Visites Médicales"},
      {"id":6,"icon":"../../assets/icons/entretien.png","title":"Entretiens"},
      {"id":7,"icon":"../../assets/icons/formation.png","title":"Formations"},
    ];
    this.nationalit = [
      "Française",
      "Autre"
    ];
    this.typeContrat = [
      'Fiche de renseignement du Salarié',
      'DPAE',
      'RIB',
      'Carte identité',
      'Dispense mutuelle',
      'Permis de séjour',
      'Diplôme',
      'Attestation 1er secours',
      'Extrait casier Judicaire',
      'Carte Vitale',
      'Certificats médicaux',
      'Autre'
    ];
    this.sex = [
      'Masculin',
      'Féminin'
    ];
    this.sexe = [
      {'type' : 'Masculin'},
      {'type':'Féminin'}
    ];
    this.situationFamil =  [
      'Célibataire',
      'Marié',
      'Veuf',
      'Divorcé',
      'Séparé',
      'Vie Maritale',
      'Bénéficiaire du PACS'

    ];

    this.presentAbsent =  [
      'Présent',
      'Absent'
    ];
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
      'Temps Plein',
	    'Temps Partiel'
    ];
    this.contrat= [
      'Contrat',
      'Avenant'
    ];

    console.log("heeeelllooodsj", this.employmentContract);

   }

  codePostalCustom(event){
    console.log(this.autre);
    if(this.adress.countryAddress === 'France'){
      if(event.value.length == 5)
        return true;
      else
        return  false;
    }
    else {
      return true;
    }
  }

  ajoutEmployee() {

    Globalize.locale('fr');
    let formatter = Globalize.dateFormatter();
    //console.log(this.worker.codePerson);
    if(this.worker.firstNamePerson == "" || this.worker.userNamePerson =="" || this.worker.userNamePerson == null ||
    this.worker.firstNamePerson ==null || this.worker.sexPerson=="" ||this.worker.sexPerson==null){
      notify("Veuillez remplir le nom d'usage, le prénom Principal et le sexe. ","error",3000);

    }
    else {
      if (this.worker.userNamePerson != undefined) {
        this.matricule += this.worker.userNamePerson;
        if (this.matricule.length > 5) {
          console.log(this.matricule);
          this.matricule = this.matricule.slice(0, 6);
        } else {
          for (let i = this.matricule.length; i <= 5; i++)
            this.matricule += 'x'
          console.log(this.matricule);
        }
        if (this.worker.firstNamePerson.length > 1)
          this.matricule += this.worker.firstNamePerson.slice(0, 2);
        this.matricule = this.matricule.toUpperCase();
        console.log(this.matricule);
      }
          if(this.selectNationality){
            this.worker.nationalityWorker = 'Autre';
          }
          else {
            this.worker.nationalityWorker = 'Française';
          }

          if(this.worker.birthDatePerson !=null)
            this.worker.birthDatePerson = this.convertFormatDate(this.worker.birthDatePerson);

          this.worker.stateWorker = "Brouillon";
          if(this.worker.familySituationWorker == "" || this.worker.familySituationWorker== null)
            this.worker.familySituationWorker = "Célibataire";
          this.worker.codePerson = this.matricule;
          this.workerService.addWorker(this.worker).subscribe(worker => {
            this.adress.worker = worker.idPerson;
            this.addressService.addAdress(this.adress).subscribe(address => {
              console.log("address : ",address);
              worker.address = address;
              console.log("worker : ", worker);
                this.bankDetails.worker = worker.idPerson;
                this.bankDetailsService.addBankDetail(this.bankDetails).subscribe(bankDetail => {
                  console.log(bankDetail);
                  worker.bankDetails = bankDetail;
                  console.log("worker apres bank details : ", worker);
                  this.workerService.updateWorker(worker).subscribe(w => {
                    if(this.employmentContract == null)
                      this.ngZone.run(() => this.router.navigate(['listWorker']));
                    else
                      this.ajoutContrat(worker.idPerson);
                    notify("Employé enregistré", "success", 3000);
                    this.worker = new Workers();
                    this.adress = new Address();
                    this.bankDetails = new BankDetails();

                  });
                });

            })
          })
    }

  }

  todayDate(){
    return new Date();
  }

  endDateEmploymentContract(){
    console.log(event);
  }

  changeEnumContrat(val){
  if(val === "Brouillon")
  return  "Brouillon";
 if(val === "En cours")
  return  "En_cours";
 if(val === "Terminé")
  return  "Terminé";
 if(val === "A_venir")
  return  "A venir";
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
  changeEnumSituationFamiliale(val){
  if(val === "Célibataire")
  return "Célibataire";
  if(val ==="Marié")
  return "Marié";
  if(val ==="Veuf")
  return "Veuf";
  if(val ==="Divorcé")
  return "Divorcé";
  if(val ==="Séparé")
  return "Séparé";
  if(val ==="Vie Maritale")
  return "Vie_Maritale";
  if(val ==="Bénéficiaire du PACS")
  return "Bénéficiaire_du_PACS";
    }

  ajoutContrat(idWorker:number){

      this.employmentContract.startDateEmploymentContract = this.convertFormatDate(this.employmentContract.startDateEmploymentContract);
      this.employmentContract.endDateEmploymentContract = this.convertFormatDate(this.employmentContract.endDateEmploymentContract);
      this.employmentContract.stateEmploymentContract  = this.changeEnumContrat(this.employmentContract.stateEmploymentContract);

      this.employmentContract.statusEmploymentContract  = this.changeEnumContrat(this.employmentContract.statusEmploymentContract);
      this.employmentContract.workTimeEmploymentContract  = this.changeEnumContrat(this.employmentContract.workTimeEmploymentContract);

      this.employmentContract.worker = idWorker;
      this.employmentContract.formContract = 'Contrat';
      console.log(this.employmentContract);


      this.contractService.addContract(this.employmentContract).subscribe(res => {
         // console.log(res);
          this.ngZone.run(() => this.router.navigate(['listWorker']));
        },
        error1 => {
          console.log(error1);

        }
      );
    console.log("hihi", this.employmentContract);
    this.employmentContract = new EmploymentContract();
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

  nationalityChanged(event: any) {
    if(event.value === "Autre"){
      this.selectNationality = true;
    }
    if(event.value === "Française"){
      this.selectNationality = false;
    }

  }
}

