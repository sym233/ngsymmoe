import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  openSideNav = false;
  isHandset = false;
  navLinks = [{
    name: 'Home',
    path: 'home',
    icon: 'home',
  }, {
    name: 'Blog',
    path: 'blog',
    icon: 'library_books',
  }, {
    name: 'About',
    path: 'about',
    icon: 'portrait',
  }];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isHandset$.subscribe(isHandset => {
      this.openSideNav = false;
      this.isHandset = isHandset;
    });
  }
}
