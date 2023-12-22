import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    RouterModule,
    AppRoutingModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
