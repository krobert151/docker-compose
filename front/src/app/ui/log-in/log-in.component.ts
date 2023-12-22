import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private loginService: LoginService) { };

  pageLogin: Boolean = true;

  profileLogin = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
  })

  profileRegister = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    verifyPassword: new FormControl(''),
    dni: new FormControl(''),
    phone: new FormControl(''),
    birthDate: new FormControl('')
  })

  changePage() {
    if (this.pageLogin) {
      this.pageLogin = false;
    } else {
      this.pageLogin = true;
    }
  }

  login() {
    this.loginService.LoginResponseUser(this.profileLogin.value.mail!, this.profileLogin.value.password!).subscribe(p => {
      localStorage.setItem('TOKEN', p.token)
      localStorage.setItem('USER_ID', p.id)
      localStorage.setItem('IS_ADMIN', "false")
      if (localStorage.getItem('TOKEN') != undefined)
        window.location.href = "http://localhost:4200/home-page"
    })

    this.loginService.LoginResponseAdmin(this.profileLogin.value.mail!, this.profileLogin.value.password!).subscribe(p => {
      localStorage.setItem('TOKEN', p.token)
      localStorage.setItem('USER_ID', p.id)
      localStorage.setItem('IS_ADMIN', "true")
      if (localStorage.getItem('TOKEN') != undefined)
        window.location.href = "http://localhost:4200/sanitary-home-page"
    })
  }

  register() {
    this.loginService.RegisterResponse(
      this.profileRegister.value.email!,
      this.profileRegister.value.name!,
      this.profileRegister.value.lastName!,
      this.profileRegister.value.password!,
      this.profileRegister.value.verifyPassword!,
      this.profileRegister.value.dni!,
      this.profileRegister.value.phone!,
      this.profileRegister.value.birthDate!
    ).subscribe(p => {
      if (p.id != undefined) {
        this.profileLogin.value.mail = p.mail;
        this.profileLogin.value.password = this.profileRegister.value.password;
        this.login()
      }
    })
  }
} 
