import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NextVaccinesToImplement } from '../models/next-vaccines-to-implement.module';
import { LastVaccinesImplementedResponse } from '../models/last-vaccines-implemented-response.module';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CalendarMomentService {

  constructor(private http:HttpClient) { }

  getNextVaccinesToImplement():Observable<NextVaccinesToImplement[]>{
    let token = localStorage.getItem('TOKEN');
    return this.http.get<NextVaccinesToImplement []>(`${environment.HeadUrl}/patient/calendarmoment/findNextVaccines/`,{
      headers:{
        accept:'application/json',
        'Authorization':`Bearer ${token}`
        }
      } 
    )
  }
  
}
