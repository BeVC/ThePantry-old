//#region import
// ANGULAR
import { Component, OnInit, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { Router } from "@angular/router";

// RXJS
import { Subscription } from "rxjs";

// BROKER
import { UserBroker } from "../../../broker/user.service";

// MODEL
import { User } from "../../../models/user";
//#endregion

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy  {
  // UI PROPERTIES
  user: User;

  // BROKER SUBSCRIPTIONS
  //private _userLoggedSubscription: Subscription -> probably useless

  constructor(
    private router: Router,
    private userBroker: UserBroker
  ) { }

  ngOnInit() {
    /*this._userLoggedSubscription = this.userBroker.onUserLoggedAsync()
    .subscribe(user =>{
      user;
    });*/ //this may well be useless

    this.user = this.userBroker.getUser();
  }

  ngOnDestroy(){
    //this._userLoggedSubscription.unsubscribe(); -> probably useless
  }

  //#region UI Events
  uiOnReturnToHubClicked() {
    let path: "/hub";
    this.router.navigate([path]);
  }
  //#endregion

}
