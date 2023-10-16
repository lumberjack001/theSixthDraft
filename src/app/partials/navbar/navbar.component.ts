import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleNav(){
    if(this.hide === false){
      this.hide = true;
    }else{
      this.hide = false
    }
  }
}
