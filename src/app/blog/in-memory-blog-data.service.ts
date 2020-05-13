import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { BlogIndex } from './blogIndex';
import blogIndex from '../../assets/blog-index.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryBlogDataService extends InMemoryDbService {
  blogIndex: BlogIndex = blogIndex;

  createDb() {
    const db = {
      blogIndex: this.blogIndex,
    };

    blogIndex.forEach(blog => {
      db[`blog_${blog.url}`] = blog.paragraph;
    });

    return db;
  }
}
