import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientBasicDataResponse } from '../models/patient-data.interface';
import { environment } from '../../environments/environment.development';
import { GetAllPatientsResponse } from '../models/get-all-patients.interface';
import { PatientDetailsResponse } from '../models/patient-details.interface';
import { DependentsByPatientResponse } from '../models/dependents-by-patient.interface';
import { MyProfileResponse } from '../models/my-profile.module';
import { ListSanitaryResponse } from '../models/list-of-sanitary';
import { SanitaryDetailsResponse } from '../models/sanitary-details';
import { PatientInfoOnTableMainResponse } from '../models/pantient-info-on-sanitary-main.module';
import { EditPatientByIDResponse } from '../models/edit-patient-by-id.interface';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  GetYoungestPatients(): Observable<PatientInfoOnTableMainResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<PatientInfoOnTableMainResponse[]>(`${environment.HeadUrl}/sanitary/patients/young/`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
  }
  GetLastAddedPatients(): Observable<PatientInfoOnTableMainResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<PatientInfoOnTableMainResponse[]>(`${environment.HeadUrl}/sanitary/patients/last/`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
  }


  GetMyProfilePage(): Observable<MyProfileResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<MyProfileResponse>(`${environment.HeadUrl}/patient/myprofile/`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
  }
  GetMyFamilyProfileResponse(): Observable<MyProfileResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<MyProfileResponse[]>(`${environment.HeadUrl}/patient/myFamilyProfile/`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
  }

  GetUserDependents(): Observable<patientBasicDataResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<patientBasicDataResponse[]>(`${environment.HeadUrl}/patient/dependents`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetUserLogged(): Observable<patientBasicDataResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<patientBasicDataResponse>(`${environment.HeadUrl}/patient/logged`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetAll(page: number): Observable<GetAllPatientsResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<GetAllPatientsResponse>(`${environment.HeadUrl}/sanitary/patient?page=${page}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetById(id: string): Observable<PatientDetailsResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<PatientDetailsResponse>(`${environment.HeadUrl}/sanitary/patient/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetDependents(id: string): Observable<DependentsByPatientResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<DependentsByPatientResponse[]>(`${environment.HeadUrl}/sanitary/patient/dependents/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }
  GetListSanitary(): Observable<ListSanitaryResponse[]> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<ListSanitaryResponse[]>(`${environment.HeadUrl}/sanitary/list`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  GetSanitary(email: string): Observable<SanitaryDetailsResponse> {
    let token = localStorage.getItem('TOKEN');
    return this.http.get<SanitaryDetailsResponse>(`${environment.HeadUrl}/sanitary/${email}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

  deletePatientById(id: string) {
    return this.http.delete(`${environment.HeadUrl}/sanitary/patient/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });

  }

  editPatientById(id: string, name: string, lastName: string, phoneNumber: string, fotoUrl: string): Observable<EditPatientByIDResponse> {
    return this.http.put<EditPatientByIDResponse>(`${environment.HeadUrl}/sanitary/patient/${id}`,
      {
        "name": `${name}`,
        "lastName": `${lastName}`,
        "phoneNumber": `${phoneNumber}`,
        "fotoUrl": `${fotoUrl}`
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      }
    );
  }


  createPatient(name: string, lastName: string, birthDate: string, dni: string, email: string, phoneNumber: string, fotoUrl: string, password: string) {
    return this.http.post(`${environment.HeadUrl}/sanitary/patient`,
      {
        "name": `${name}`,
        "lastName": `${lastName}`,
        "birthDate": `${birthDate}`,
        "dni": `${dni}`,
        "email": `${email}`,
        "phoneNumber": `${phoneNumber}`,
        "fotoUrl": `${fotoUrl}`,
        "password": `${password}`,
        "dependents": []
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
        }
      });
  }
  DeleteSanitary(uuid: string): Observable<void> {
    let token = localStorage.getItem('TOKEN');
    return this.http.delete<void>(`${environment.HeadUrl}/sanitary/${uuid}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  }

}



