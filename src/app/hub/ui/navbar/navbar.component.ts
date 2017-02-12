//#region import
// ANGULAR
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
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
export class NavbarComponent implements OnInit, OnDestroy {

  // BROKER SUBSCRIPTIONS
  private _userLoggedSubscription: Subscription

  constructor(
    private router: Router,
    private userBroker: UserBroker
  ) { }

  ngOnInit() {
    this._userLoggedSubscription = this.userBroker.onUserLoggedAsync()
    .subscribe(user =>{
      user;
      alert(user.firstName);
    });
  }

  ngOnDestroy(){
    this._userLoggedSubscription.unsubscribe();
  }

  //#region UI Events
  uiOnReturnToHubClicked() {
    let path: "/hub";
    this.router.navigate([path]);
  }
  //#endregion

}
