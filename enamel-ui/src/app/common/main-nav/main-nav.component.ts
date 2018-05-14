import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("side-bar").style.width = "250px";
  }

  closeNav() {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

}
