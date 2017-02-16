import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

// ROUTING
import { AppRoutingModule } from "./app-routing.module";
import { HubModule } from "./hub/hub.module";

// COMPONENT
import { AppComponent } from './app.component';

// BROKER
import { UserBroker } from "./broker/user.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    HubModule,
    AppRoutingModule,

  ],
  providers: [UserBroker],
  bootstrap: [AppComponent]
})
export class AppModule { }
