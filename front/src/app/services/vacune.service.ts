import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditVacuneResponse, VacuneResponse } from '../models/vacune.module';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VacuneService {

  constructor(private http: HttpClient) { }

  getAllVacine(page: number): Observable<VacuneResponse> {
    return this.http.get<VacuneResponse>(`${environment.HeadUrl}/vacune/all?page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });
  }



  getSearchVacineByName(page: number, search: string): Observable<VacuneResponse> {
    return this.http.get<VacuneResponse>(`${environment.HeadUrl}/vacune/search/${search}?page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });
  }

  newVacune(name: string, description: string) {
    return this.http.post(`${environment.HeadUrl}/vacune/new`,
      {
        name: `${name}`,
        description: `${description}`
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
  }

  editVacune(id: string, name: string, description: string): Observable<EditVacuneResponse> {
    return this.http.put<EditVacuneResponse>(`${environment.HeadUrl}/vacune/edit/${id}`,
      {
        "name": `${name}`,
        "description": `${description}`
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
  }

  deleteVacune(id: string) {
    return this.http.delete(`${environment.HeadUrl}/vacune/delete/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
  }
}
