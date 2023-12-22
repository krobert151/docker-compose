import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LastVaccinesImplementedResponse } from '../models/last-vaccines-implemented-response.module';
import { environment } from '../../environments/environment.development';
import { CalendarResponse } from '../models/calendar-response.module';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  getLastVaccinesIMplemented(): Observable<LastVaccinesImplementedResponse[]> {
    let token = localStorage.getItem(`TOKEN`);
    return this.http.get<LastVaccinesImplementedResponse[]>(`${environment.HeadUrl}/patient/administration/findLastVaccineImplementedByUserId/`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
  }
  getCalendarOfMyFamily(): Observable<CalendarResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<CalendarResponse[]>(`${environment.HeadUrl}/patient/administration/getCalendar/`, {
      headers: {
        acept: 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
