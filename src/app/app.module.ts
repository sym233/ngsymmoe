import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { PageE404Component } from './page-e404/page-e404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeMainComponent,
    BlogMainComponent,
    AboutMainComponent,
    PageE404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
