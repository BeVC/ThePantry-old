//#region import
// ANGULAR
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

//#endregion

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router;
  ) { }

  ngOnInit() {
  }

  //#region UI Events
  uiOnReturnToHubClicked() {
    let path: "/hub";
    this.router.navigate([path]);
  }
  //#endregion

}
