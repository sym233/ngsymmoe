import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit {
  blogId: string;
  blogContent: string;
  blogError: string;
  blogFinished = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(observer => {
      const blogId = observer.get('blog-id') || '';
      this.blogId = blogId;
      if (blogId) {
        const blog$ = this.blogService.getBlog(this.blogId);
        blog$.subscribe(
          blog => {
            this.blogContent = blog;
          },
          err => {
            this.blogError = JSON.stringify(err);
          },
          () => {
            this.blogFinished = true;
          }
        );
      }
    });
  }

  backBlogPage() {
    this.router.navigate(['..']);
  }
}
