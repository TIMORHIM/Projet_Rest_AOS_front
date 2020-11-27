import {Component, Input, OnInit} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { TokenStorageService } from '../auth/token-storage.service';
import { DomSanitizer } from "@angular/platform-browser";
import {Route, Router} from '@angular/router';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private roles: string[];
  private authority: string;
  @Input() isLoggedIn = false;
  isExpanded = false;
  element: HTMLElement;
  iconName : string = '';
  menu1 : string = '';
  home : string = '';
  private show: boolean = false;

  constructor(private tokenStorage: TokenStorageService,private route: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      this.iconName = "money-bag",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/pf.svg")

    );
    this.matIconRegistry.addSvgIcon(
      this.menu1 = "menu1",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/menu1.svg")

    );
    this.matIconRegistry.addSvgIcon(
      this.home = "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/home.svg")

    );
  }
  changeIcon(){
    if(this.iconName =="money-bag"){
      this.matIconRegistry.addSvgIcon(
        this.iconName = "pf",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/pf2.svg")
      );
    }
    else
      this.matIconRegistry.addSvgIcon(
        this.iconName = "money-bag",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/pf2.svg")

      );
  }
  changeIconMenu(){
    this.matIconRegistry.addSvgIcon(
      this.menu1 = "menu2",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/menu2.svg")

    );
  }

  toggleActive(event:any ){
   // debugger;
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.color = "#4F657F";
      this.element.style.backgroundColor = "#4F657F";
      this.element.style.font= "blod";

    }
    let target = event.currentTarget;
    target.style.color = "#8EB4E3";
    this.element.style.backgroundColor = "#8EB4E3";
    this.element.style.font= "blod";

    this.element = target;
  }

  ngOnInit() {
    this.roles = this.tokenStorage.getAuthorities();
    this.roles.forEach(role =>
      {

        if(role === 'ROLE_STR' || role === 'ROLE_SER' || role === 'ROLE_ADMIN')
          this.show = true
      }
    );
    if (this.tokenStorage.getToken()) {

      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();

      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_STR') {
          this.authority = 'directeur';
          return false;
        }
        this.authority = 'ROLE_SER';
        this.authority = 'service';
        return true;
      });
    }
    else
    {
      if (this.route.url != "/auth/login" ){
        notify("Veillez vous identifier  ", "warning", 3000);
        this.route.navigate(['/auth/login']);
      }

    }
  }
  logout() {
    this.tokenStorage.signOut();
    this.route.navigate(['/auth/login']);

  }


}
