//#region Import
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './ui/hub.component';

// ROUTING
import { HubRoutingModule } from "./hub-routing.module";

// TREE
import { TreeView } from "./ui/tree/tree";

//#endregion

@NgModule({
  imports: [
    CommonModule,
    HubRoutingModule
  ],
  declarations: [
    HubComponent,
    TreeView
  ]
})

export class HubModule { }
