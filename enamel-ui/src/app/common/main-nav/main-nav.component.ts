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
    document.getElementById("side-bar").style.opacity = "1";
  }

  closeNav() {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("side-bar").style.opacity = "0";
  }

  toggleProfile(){
  	let className = document.getElementById("profile-box").getAttribute("class");
  	if(className == 'active')
  		document.getElementById("profile-box").setAttribute("class","");
  	else
  		document.getElementById("profile-box").setAttribute("class","active");
  }

}
