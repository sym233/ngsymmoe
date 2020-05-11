import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { HomeMainComponent } from './home-main/home-main.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { PageE404Component } from './page-e404/page-e404.component';

const lazyModules: { [ModuleName: string]: Route['loadChildren']} = {
  async blog() {
    return (await import('./blog/blog.module')).BlogModule;
  }
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeMainComponent },
  { path: 'blog', loadChildren: lazyModules.blog },
  { path: 'about', component: AboutMainComponent },
  { path: '**', component: PageE404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
