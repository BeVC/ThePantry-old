import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

// ROUTING
import { AppRoutingModule } from "./app-routing.module";

// COMPONENT
import { AppComponent } from './app.component';
import { PantryComponent } from './pantry/pantry/pantry.component';

@NgModule({
  declarations: [
    AppComponent,
    PantryComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
