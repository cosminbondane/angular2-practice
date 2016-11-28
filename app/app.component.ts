import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { }