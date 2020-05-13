import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { BlogIndex } from '../blogIndex';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.less']
})
export class BlogMainComponent implements OnInit {
  blogIndex: BlogIndex;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogIndex();
  }

  getBlogIndex() {
    this.blogService.getBlogIndex().subscribe(
      observer => {
        this.blogIndex = observer;
      }
    );
  }
}
