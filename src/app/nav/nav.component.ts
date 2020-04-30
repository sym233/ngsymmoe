import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  navLinks = [{
    name: 'Home',
    path: 'home',
  }, {
    name: 'Blog',
    path: 'blog',
  }, {
    name: 'About',
    path: 'about',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
