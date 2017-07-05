import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {WikipediaSearchService} from "./wikipedia-search.service";

@NgModule({
  imports:      [ BrowserModule,JsonpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[WikipediaSearchService]
})
export class AppModule { }
