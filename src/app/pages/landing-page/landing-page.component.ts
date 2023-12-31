import { Component, OnInit } from '@angular/core';
import * as textData from "src/assets/jsondata/textdataDB.json"

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  accordionText:any = textData
  accordionBody: string = this.accordionText[0].homePage.accordion;
  constructor() { }

  ngOnInit(): void {
  }

}
