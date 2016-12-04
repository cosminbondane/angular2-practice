import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { User } from '../../../services/models/user';
import { UsersService } from '../../../services/users.service';
import { UserDetails } from './user.details';
import { AdminGrid } from './admin.grid';

let fixture: ComponentFixture<AdminGrid>;
let comp: AdminGrid;

let page: Page;

describe('AdminGrid', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGrid, UserDetails ],
      providers: [ {provide: UsersService, useClass: UsersServiceStub} ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AdminGrid);
      comp = fixture.componentInstance;
      
      fixture.detectChanges();
      
      return fixture.whenStable().then(() => {
        // got the users and updated component
        // change detection updates the view
        fixture.detectChanges();
        page = new Page();
      });
    });
  }));
  
  it('should display all users', () => {
    expect(page.usersRows.length).toBe(2, 'display the 2 users');
  });
  
  it('should match 1st user', () => {
    var txt = page.usersRows[0].textContent;
    
    expect(txt).toContain('John Doe', 'name');
    expect(txt).toContain('john.doe@gmail.com', 'email');
    expect(txt).toContain('+321343239', 'phone');
  });
  
});

class UsersServiceStub {
  users: Array<User> = [
    { name: 'John Doe', email: 'john.doe@gmail.com', phone: '+321343239' }
    { name: 'John Truck', email: 'john.truck@gmail.com', phone: '+332943239' }
  ];
  
  getAll() {
    return Promise.resolve<User[]>(this.users);
  }
}

class Page {
  usersRows: HTMLLIElement[];

  constructor() {
    this.usersRows = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
  }
}