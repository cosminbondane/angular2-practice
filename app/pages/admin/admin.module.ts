import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './admin.component';
import { AdminGrid } from './admin.grid/admin.grid';
import { UserDetails } from './admin.grid/user.details'

import { ServicesModule } from '../../services/services.module'

@NgModule({
  imports: [ ServicesModule, BrowserModule ],
  declarations: [ AdminComponent, AdminGrid, UserDetails ],
  bootstrap:    [ AdminComponent ]
})

export class AdminModule {}