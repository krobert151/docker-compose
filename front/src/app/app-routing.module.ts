import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './ui/log-in/log-in.component';
import { HomePageComponent } from './ui/USER/home-page/home-page.component';
import { CalendarPageComponent } from './ui/USER/calendar-page/calendar-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { VaccinesPageComponent } from './ui/USER/vaccine-page/vaccines-page.component';
import { SanitaryHomePageComponent } from './ui/SANITARY/sanitary-home-page/sanitary-home-page.component';
import { PageMyprofileComponent } from './ui/USER/page-myprofile/page-myprofile.component';
import { PatientsPageComponent } from './ui/SANITARY/patients-page/patients-page.component';
import { SanitaryPageComponent } from './ui/SANITARY/sanitary-page/sanitary-page.component';

import { SanitaryVaccinePageComponent } from './ui/SANITARY/sanitary-vaccine-page/sanitary-vaccine-page.component';

const routes: Routes = [
  { path: 'calendar-page', component: CalendarPageComponent },
  { path: 'login', component: LogInComponent },
  { path: 'user-vaccine', component: VaccinesPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'user-detail-home', component: PageMyprofileComponent },
  { path: 'sanitary-home-page', component: SanitaryHomePageComponent },

  { path: 'sanitary-page', component: SanitaryPageComponent },

  { path: 'sanitary-vaccine-page', component: SanitaryVaccinePageComponent},

  { path: 'patients-page', component: PatientsPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
