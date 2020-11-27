export class BankDetails {
  idBankDetails: number;
  ibanbankDetails: string;
  bicbankDetails: string;
  codeBankDetails: string;
  titleOfAccountBankDetails: string;
  worker:number;

  constructor() {
  }

  BankDetails(idBankDetails: number, IBANBankDetails: string, BICBankDetails: string, titleOfAccountBankDetails: string) {
    this.idBankDetails = idBankDetails;
    this.ibanbankDetails = IBANBankDetails;
    this.bicbankDetails = BICBankDetails;
    this.titleOfAccountBankDetails = titleOfAccountBankDetails;
  }
}

