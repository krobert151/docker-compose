import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAdmin() {
    if (localStorage.getItem('IS_ADMIN') == "true") {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    window.location.href = `${environment.HeadUrl}/login`;
  }
}
