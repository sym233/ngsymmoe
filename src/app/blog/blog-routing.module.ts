import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const routes: Routes = [
  { path: ':blog-id', component: BlogDetailComponent },
  { path: '', component: BlogMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
