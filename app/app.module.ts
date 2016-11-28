import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent }   from './app.component';
import { AdminModule } from './pages/admin/admin.module';
import { DashboardModule } from './pages/dashboard/dashboard.module'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, AdminModule, DashboardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
