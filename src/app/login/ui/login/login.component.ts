// ANGULAR
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// SERVICE
import { LoginService } from "../../service/login.service";

// MODELS

import { User } from "../../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  usersCol: User[] = [];

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  testUserService(){
    this.loginService.getUsers()
    .then(response =>{
      this.usersCol = response;
    })
  }

}
