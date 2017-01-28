//#region Import
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './ui/hub.component';

// ROUTING
import { HubRoutingModule } from "./hub-routing.module";
//#endregion

@NgModule({
  imports: [
    CommonModule,
    HubRoutingModule
  ],
  declarations: [HubComponent]
})

export class HubModule { }
