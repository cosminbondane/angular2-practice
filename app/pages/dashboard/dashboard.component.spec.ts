import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DashboardComponent } from './dashboard.component';

let comp:    DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('Dashboard Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ], // declare the test component
    });
  
    fixture = TestBed.createComponent(DashboardComponent); //  creates an instance of 
    
    comp = fixture.componentInstance;
    
     // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  })
  
  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
})