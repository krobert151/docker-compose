import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LogInComponent } from './ui/log-in/log-in.component';
import { NavComponent } from './components/CALENDARPAGE/user/nav/nav.component';
import { NavbarComponent } from './components/COMMONS/navbar/navbar.component';
import { FooterComponent } from './components/COMMONS/footer/footer.component';
import { HomePageComponent } from './ui/USER/home-page/home-page.component';
import { CalendarPageComponent } from './ui/USER/calendar-page/calendar-page.component';
import { LastVacinnesComponent } from './components/HOMEPAGE/User/last-vacinnes/last-vacinnes.component';
import { NextVacinnesComponent } from './components/HOMEPAGE/User/next-vacinnes/next-vacinnes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { CalendaryComponent } from './components/COMMONS/calendary/calendary.component';
import { VaccinesPageComponent } from './ui/USER/vaccine-page/vaccines-page.component';
import { SanitaryHomePageComponent } from './ui/SANITARY/sanitary-home-page/sanitary-home-page.component';
import { YoungestPatientsComponent } from './components/HOMEPAGE/Sanitary/youngest-patients/youngest-patients.component';
import { VacuneItemComponent } from './components/VACCINEPAGE/vacune-item/vacune-item.component';
import { PageMyprofileComponent } from './ui/USER/page-myprofile/page-myprofile.component';
import { UserDataComponent } from './components/USER/user-data/user-data.component';
import { PatientsPageComponent } from './ui/SANITARY/patients-page/patients-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DependientComponent } from './components/USER/dependient/dependient.component';
import { VacuneListComponent } from './components/VACCINEPAGE/vacune-list/vacune-list.component';

import { SanitaryPageComponent } from './ui/SANITARY/sanitary-page/sanitary-page.component';

import { AdminVacuneItemComponent } from './components/VACCINEPAGE/admin-vacune-item/admin-vacune-item.component';
import { AdminVacuneListComponent } from './components/VACCINEPAGE/admin-vacune-list/admin-vacune-list.component';
import { SanitaryVaccinePageComponent } from './ui/SANITARY/sanitary-vaccine-page/sanitary-vaccine-page.component';
import { LastAddedPatientsComponent } from './components/HOMEPAGE/Sanitary/last-added-patients/last-added-patients.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    LastVacinnesComponent,
    CalendarPageComponent,
    NextVacinnesComponent,
    LogInComponent,
    PageNotFoundComponent,
    CalendaryComponent,
    VaccinesPageComponent,
    VacuneItemComponent,
    VacuneListComponent,
    SanitaryHomePageComponent,
    YoungestPatientsComponent,
    PageMyprofileComponent,
    UserDataComponent,
    PatientsPageComponent,
    DependientComponent,
    SanitaryPageComponent,
    AdminVacuneItemComponent,
    AdminVacuneListComponent,
    SanitaryVaccinePageComponent,
    LastAddedPatientsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
