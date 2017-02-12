//#region import
// ANGULAR
import { Injectable, EventEmitter, OnInit, OnDestroy } from '@angular/core';

// RXJS
import { Observable } from "rxjs/Observable";

// MODELS
import { User } from "../../models/user";
//#endregion

@Injectable()
export class UserBroker implements OnInit, OnDestroy {

  // PRIVATE STATES
  private _user: User;

  // CONSTANTS -> CHANNEL NAMES
  private _channelUser: string = "LOGGED_USER";

  // TYPE SAFE EMITTERS
  private _userEmitter: { [channel: string]: EventEmitter<User> } = {};

  constructor() { }

  //#region Angular Events
  ngOnInit() { }

  ngOnDestroy() { 
    this._userEmitter[this._channelUser].unsubscribe();
  }
  //#endregion

  //#region Public Async Events

  //#endregion
}
