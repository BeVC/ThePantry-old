// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTING
import { LoginRoutingModule } from "./login-routing.module";

// SERVICE
import { LoginService } from "./service/login.service";

// COMPONENT
import { LoginComponent } from './ui/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]

})
export class LoginModule { }
