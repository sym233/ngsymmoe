import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMainComponent } from './home-main/home-main.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { PageE404Component } from './page-e404/page-e404.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeMainComponent },
  { path: 'blog', component: BlogMainComponent },
  { path: 'about', component: AboutMainComponent },
  { path: '**', component: PageE404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
