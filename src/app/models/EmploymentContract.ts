import { Workers } from "./Workers";

export class EmploymentContract {

  idEmploymentContract: number;

  formContract:string;
  code_employment_contract: string;

  stateEmploymentContract: string;
  statusEmploymentContract: string;
  typeEmploymentContract: string;
  workTimeEmploymentContract: string;
  startDateEmploymentContract: Date;
  endDateEmploymentContract: Date;
  pointsSeniorityEmploymentContract: number;
  complementaryPointsEmploymentContract: number;

  noteEmploymentContract: string;


  worker: number;

  pointBase: number;

  contractAnnexation:EmploymentContract;

  EmploymentContract(code_employment_contract: string, stateEmploymentContract: string,
    statusEmploymentContract: string,
    noteEmploymentContract: string,
    typeEmploymentContract: string,
    workTimeEmploymentContract: string,
    startDateEmploymentContract: Date,
    endDateEmploymentContract: Date,
    annexEmploymentContract: string,
    pointsSeniorityEmploymentContract: number,
    complementaryPointsEmploymentContract: number,
    businessCard:number,
    worker: number,  structureAttached: number,contratAvenant: String,pointBase: number

    ) {
    this.formContract = 'Contrat';
   this.code_employment_contract = code_employment_contract;
   this.stateEmploymentContract = stateEmploymentContract;
   this.noteEmploymentContract =noteEmploymentContract ;
   this.statusEmploymentContract =statusEmploymentContract ;
   this.typeEmploymentContract = typeEmploymentContract;
   this.workTimeEmploymentContract = workTimeEmploymentContract;
   this.startDateEmploymentContract =startDateEmploymentContract ;
   this.endDateEmploymentContract = endDateEmploymentContract;
   this.pointsSeniorityEmploymentContract = pointsSeniorityEmploymentContract;
   this. complementaryPointsEmploymentContract=complementaryPointsEmploymentContract;
   this.worker=worker;
   this.pointBase=pointBase;

  }



}
