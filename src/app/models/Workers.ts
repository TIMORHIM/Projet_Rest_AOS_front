import {Address} from './Address';
import {BankDetails} from './BankDetails';
import {EmploymentContract} from './EmploymentContract';

//18
export class Workers {
  idPerson: number;
  codePerson: string;
  userNamePerson: string;
  lastname: string;
  firstNamePerson: string;
  birthDatePerson: Date;
  sexPerson: string;
  personalPhonePortablePerson: string;
  personalMailPerson: string;

  stateWorker: string;

  departmentOfBirthWorker: string;
  nativeCountryWorker: string;
  placeOfBirthWorker: string;
  nationalityWorker: string;

  socialSecurityNumberWorker: string;
  familySituationWorker: string;

  address: Address;
  employmentContract: EmploymentContract;
  bankDetails: BankDetails;

  constructor() {
    this.nationalityWorker = 'Française';
  }

  Workers(idPerson: number, bankDetails: BankDetails, employmentContract: EmploymentContract, codePerson: string, userNamePerson: string, lastname: string, firstNamePerson: string, birthDatePerson: Date, sexePerson: string, personalPhonePortablePerson: string, personalMailPerson: string, commentWorker: string, departmentOfBirthWorker: string, nativeCountryWorker: string, placeOfBirthWorker: string, nationalityWorker: string, socialSecurityNumberWorker: string, familySituationWorker: string, address: Address) {
    this.idPerson = idPerson;
    this.bankDetails = bankDetails;
    this.codePerson = codePerson;
    this.userNamePerson = userNamePerson;
    this.lastname = lastname;
    this.firstNamePerson = firstNamePerson
    this.birthDatePerson = birthDatePerson;
    this.sexPerson = sexePerson;
    this.personalPhonePortablePerson = personalPhonePortablePerson;
    this.personalMailPerson = personalMailPerson;
    this.departmentOfBirthWorker = departmentOfBirthWorker;
    this.nativeCountryWorker = nativeCountryWorker;
    this.placeOfBirthWorker = placeOfBirthWorker;
    this.nationalityWorker = nationalityWorker;
    this.socialSecurityNumberWorker = socialSecurityNumberWorker;
    this.familySituationWorker = familySituationWorker;
    this.address = address;
    this.employmentContract = employmentContract;
  }
}
