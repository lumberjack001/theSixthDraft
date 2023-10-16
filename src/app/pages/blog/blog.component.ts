import { Component, OnInit } from '@angular/core';
import * as BlogData from "src/assets/jsondata/textdataDB.json"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogData: any[] = BlogData
  blogList: any[] = this.blogData[0].blog
  constructor() { }

  ngOnInit(): void {
    console.log(this.blogList)
  }

}
