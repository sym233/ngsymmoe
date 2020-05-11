import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.less']
})
export class BlogMainComponent implements OnInit {

  blogIds = [0, 1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
