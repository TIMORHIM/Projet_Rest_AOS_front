import { BrowserModule } from '@angular/platform-browser';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

import { MatProgressSpinnerModule } from '@angular/material';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  DxAccordionModule,
  DxChartModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxPieChartModule,
  DxSelectBoxModule,
  DxMultiViewModule,
  DxCheckBoxModule,
  DxTemplateModule,
  DxButtonModule,
  DxPopoverModule,
  DxDataGridModule,
  DxTabPanelModule,
  DxPopupModule,
  DxFormModule,
  DxBoxModule,
  DxLoadPanelModule,
  DxLookupModule,
  DxProgressBarModule,
  DxBulletModule,
  DxFileUploaderModule,
  DxTextAreaModule, DxTextBoxModule, DxListModule
} from 'devextreme-angular';

import {MatAutocompleteModule,
  MatDividerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
}
from '@angular/material';

import {HttpModule} from '@angular/http';

import {MatFormFieldModule} from '@angular/material/form-field';

import './localization';
import {registerLocaleData} from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddWorkerComponent } from './worker/add-worker/add-worker.component';
import { ListWorkerComponent } from './worker/list-worker/list-worker.component';
import { ContratComponent } from './contrat/contrat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    NavComponent,
    PageNotFoundComponent,
    AddWorkerComponent,
    ListWorkerComponent,
    ContratComponent,
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    DxLookupModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule,
    MatFormFieldModule,
    HttpModule,
    MatSidenavModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    DxMultiViewModule,
    DxFileUploaderModule,
    MatProgressSpinnerModule,
    DxPopupModule,
    DxButtonModule,
    DxPopoverModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxChartModule,
    DxAccordionModule,
    DxNumberBoxModule,
    DxPieChartModule,
    DxCheckBoxModule,
    DxFormModule,
    DxBoxModule,
    DxLoadPanelModule,
    DxProgressBarModule,
    DxBulletModule,
    DxFileUploaderModule,
    DxTextBoxModule,
    DxListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
