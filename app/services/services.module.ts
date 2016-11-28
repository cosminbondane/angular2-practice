import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { User } from './models/user';
import { UsersService } from './users.service'

@NgModule({
    imports: [ HttpModule ],
    providers: [ User, UsersService ] 
})

export class ServicesModule {}