import { Component, OnInit } from '@angular/core';
import * as workData from "src/assets/jsondata/textDataDB.json"


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  
  workData: any[] = workData
  workList: any[] = this.workData[0].portfolio
  constructor() { }

  ngOnInit(): void {
  }

}
