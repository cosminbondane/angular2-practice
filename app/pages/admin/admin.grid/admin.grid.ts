import { Component, OnInit } from '@angular/core';

import { User } from '../../../services/models/user';
import { UsersService } from '../../../services/users.service';

@Component({
    moduleId: module.id,
    selector: 'admin-grid',
    templateUrl: 'admin.grid.html',
    styleUrls: ['admin.grid.css']
})

export class AdminGrid implements OnInit {
    users: User[];
    
    constructor(private usersService: UsersService) {}
    
    ngOnInit(): void {
        this.usersService.getAll()
            .then(users => this.users = users);
    }
}