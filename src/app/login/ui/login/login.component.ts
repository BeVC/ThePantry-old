// ANGULAR
import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm } from "@angular/forms";

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
  // UI PROPERTIES
  private email: string;
  private password: string;


  loginForm: NgForm;
  @ViewChild("loginForm") currentForm: NgForm;

  //usersCol: User[] = [];

  constructor(
    private loginService: LoginService
  ) { }

  //#region Angular Events
  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.formChanged();
  }
  //#endregion

  //#region UI Events
  onSubmit() {
    //this.submitted = true;
  }
  //#endregion

  //#region Private Class Functions
  private formChanged() {
    if (this.currentForm === this.loginForm) { return; }
    this.loginForm = this.currentForm;
    if (this.loginForm) {
      this.loginForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  private onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }

  formErrors = {
    "email": "",
    "password": ""
  }

  validationMessages = {
    "email": {
      "required": "Email is required"
    },
    "password": {
      required: "Password is required"
    }
  }
  //#endregion

  /*testUserService(){
    this.loginService.getUsers()
    .then(response =>{
      this.usersCol = response;
    })
  }*/

}
