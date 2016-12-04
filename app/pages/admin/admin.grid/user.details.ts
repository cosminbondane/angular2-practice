import { Component, Input } from '@angular/core';

import { User } from '../../../services/models/user';


@Component({
    moduleId: module.id,
    selector: 'user-details',
    templateUrl: 'user.details.html',
    styleUrls: ['user.details.css']
})

export class UserDetails {
    @Input() user: User;

    displayNumber() : void {
        alert(this.user.phone);
    }
}