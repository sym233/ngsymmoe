import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { BlogRoutingModule } from './blog-routing.module';

import { InMemoryBlogDataService } from './in-memory-blog-data.service';
import { BlogService } from './blog.service';

import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  providers: [
    BlogService,
  ],
  declarations: [
    BlogMainComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBlogDataService, { dataEncapsulation: false }
    ),
  ]
})
export class BlogModule { }
