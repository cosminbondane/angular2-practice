import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserDetails } from './user.details';
import { User } from '../../../services/models/user';

let fixture: ComponentFixture<UserDetails>;
let comp: UserDetails;
let page: Page;

describe('UserDetails', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetails ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserDetails);
      comp = fixture.componentInstance;
      
      comp.user = new User();
      comp.user.name = 'John Doe';
      comp.user.email = 'john.doe@gmail.pl';
      comp.user.phone = '0002313124';
      
      fixture.detectChanges();
      
      page = new Page();
    });
  }));
  
  it('should display the user', () => {
    expect(page.name).toBe('John Doe', 'name should be displayed');
    expect(page.email).toBe('john.doe@gmail.pl', 'email should be displayed');
    expect(page.phone).toBe('0002313124', 'phone should be displayed');
  });
  
});

class Page {
  name: string;
  email: string;
  phone: string;
  
  constructor() {
    this.name = fixture.debugElement.query(By.css('.name')).nativeElement.textContent;
    this.email = fixture.debugElement.query(By.css('.email')).nativeElement.textContent;
    this.phone = fixture.debugElement.query(By.css('.phone')).nativeElement.textContent;
  }
}