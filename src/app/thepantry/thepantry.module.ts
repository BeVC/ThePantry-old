//#region Import
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTING
import { ThePantryRoutingModule } from "./thepantry-routing.module";
import { PantryOverviewComponent } from './ui/pantry-overview/pantry-overview.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    ThePantryRoutingModule
  ],
  declarations: [PantryOverviewComponent]
})
export class ThePantryModule { }
