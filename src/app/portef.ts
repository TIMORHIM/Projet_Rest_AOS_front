import {Injectable} from '@angular/core';

export class Company {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Prevision: number;
    Revision: number;
    Engagement: number;
    Regalement: number;
}

let companies: Company[] = [{
    "ID": 1,
    "CompanyName": "JAMMEPES",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Prevision": 72716,
    "Revision": 84598,
    "Engagement": 5984,
    "Regalement": 489357
}, {
    "ID": 2,
    "CompanyName": "GRANGE AUX BELLES",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Prevision": 30339,
    "Revision": 5098,
    "Engagement": 594,
    "Regalement": 8957
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Prevision": 55403,
    "Revision": 84598,
    "Engagement": 5984,
    "Regalement": 489357
}, {
    "ID": 4,
    "CompanyName": "CHATEAU LANDON",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Prevision": 98027,
    "Revision": 8498,
    "Engagement": 1984,
    "Regalement": 89357
}];

@Injectable()
export class Service {
  getCompanies(): Company[] {
    return companies;
  }
}
