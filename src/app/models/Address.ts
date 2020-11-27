export class Address{
  idAddress: number;
  codeAddress: string;
  complement1Address: string;
  complement2Address: string;
  countryAddress: string;
  postalCodeAddress: number;
  cityAddress: string;
  worker:number;

  constructor() {
    this.countryAddress = 'France';
  }

  Address(idAddress: number, codeAddress: string,  complement1Address: string, complement2Address: string, countryAddress: string, postalCodeAddress: number, cityAddress: string) {
    this.idAddress = idAddress;
    this.codeAddress = codeAddress;
    this.complement1Address = complement1Address;
    this.complement2Address = complement2Address;
    this.countryAddress = countryAddress;
    this.postalCodeAddress = postalCodeAddress;
    this.cityAddress = cityAddress;
  }
}
