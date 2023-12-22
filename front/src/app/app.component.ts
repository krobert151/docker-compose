import { Component } from '@angular/core';
import { LogInComponent } from './ui/log-in/log-in.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VaxConnectAngularClient';
  public show = true;

  toggleNavBar(component: any) {
    if (component instanceof LogInComponent) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
