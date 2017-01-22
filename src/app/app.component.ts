//#region Import
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  //title = 'app works!';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    let path = "login";
    this.router.navigate([path]); 

  }
}
