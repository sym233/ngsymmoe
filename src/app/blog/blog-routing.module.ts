import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogMainComponent } from './blog-main/blog-main.component';


const routes: Routes = [
  { path: '', component: BlogMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
