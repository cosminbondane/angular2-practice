import { Component, Input } from '@angular/core';

import { User } from '../../../services/models/user';


@Component({
    moduleId: module.id,
    selector: 'user-address',
    templateUrl: 'user.address.html',
    styleUrls: ['user.address.css']
})

export class UserAddress {
    @Input() user: User;

    displayNumber() : void {
        alert(this.user.phone);
    }
}