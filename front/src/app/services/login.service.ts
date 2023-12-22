import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';
import { LoginResponse, RegisterResponse } from '../models/login-modules.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  LoginResponseUser(mail: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.HeadUrl}/auth/login`,
      // return this.http.post<LoginResponse>(`${environment.HeadUrl}/auth/login`,
      {
        "mail": `${mail}`,
        "password": `${password}`
      }
    );
  }

  LoginResponseAdmin(mail: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.HeadUrl}/auth/login/sanitary`,
      {
        "mail": `${mail}`,
        "password": `${password}`
      }
    );
  }

  RegisterResponse(email: string,
    name: String,
    lastName: String,
    password: string,
    verifyPassword: String,
    dni: String,
    phoneNumber: String,
    birthDate: String
  ): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${environment.HeadUrl}/auth/register`,
      {
        "email": `${email}`,
        "name": `${name}`,
        "lastName": `${lastName}`,
        "password": `${password}`,
        "verifyPassword": `${verifyPassword}`,
        "dni": `${dni}`,
        "phoneNumber": `${phoneNumber}`,
        "birthDate": `${birthDate}`
      }
    );
  }
}
