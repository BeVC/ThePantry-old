//#region Import
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './ui/hub.component';

// ROUTING
import { HubRoutingModule } from "./hub-routing.module";
import { NavbarComponent } from './ui/navbar/navbar.component';

// BROKER
import { UserBroker } from "./broker/user.service";
//#endregion

@NgModule({
  imports: [
    CommonModule,
    HubRoutingModule
  ],
  declarations: [
    HubComponent,
    NavbarComponent
  ],
  providers: [
    UserBroker
  ]
})

export class HubModule { }
