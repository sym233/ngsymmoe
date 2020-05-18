import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { BlogService } from '../blog.service';
import { BlogIndex } from '../blogIndex';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.less'],
  animations: [
    trigger('blogLoadHint', [
      state('in', style({
        transform: 'none',
        opacity: 1,
      })),
      state('void', style({
        opacity: 0,
      })),
      transition(':leave', [
        animate(700, style({
          transform: 'translateY(-5em)',
        })),
      ]),
    ]),
    trigger('blogList', [
      state('in', style({
        transform: 'none',
        opacity: 1,
      })),
      state('void', style({
        transform: 'translateY(5em)',
        opacity: 0,
      })),
      transition(':enter', [
        animate('700ms ease-out'),
      ]),
    ])
  ],
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
