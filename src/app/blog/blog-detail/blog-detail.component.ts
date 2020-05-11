import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit {
  blogId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(observer => {
      this.blogId = Number.parseInt(observer.get('blog-id'), 10) || 0;
    });
  }

  backBlogPage() {
    this.router.navigate(['..']);
  }

}
