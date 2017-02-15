//#region import
// ANGULAR
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

//#endregion

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  //#region UI Events
  uiOnToThePantryClicked(){
    let path = "/pantry";
    this.router.navigate([path]);
  }
  //#endregion

}
