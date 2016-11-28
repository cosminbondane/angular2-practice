import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './admin.component';
import { AdminGrid } from './admin.grid/admin.grid';
import { UserAddress } from './admin.grid/user.address'

import { ServicesModule } from '../../services/services.module'

@NgModule({
  imports: [ ServicesModule, BrowserModule ],
  declarations: [ AdminComponent, AdminGrid, UserAddress ],
  bootstrap:    [ AdminComponent ]
})

export class AdminModule {}