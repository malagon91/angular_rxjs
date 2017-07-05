import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import {WikipediaSearchService} from "./wikipedia-search.service";
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  items:Array<string>;
  term$ = new Subject<string>();
  constructor(private service:WikipediaSearchService){

    this.service.search(this.term$).subscribe(result=>this.items = result);
    /* Se removio cuando simplifique codigo para hacer mas inteligente el service
    this.term$.debounceTime(400)
      .distinctUntilChanged()//Para secuencias de flujo que no son concurrentes es mejor switchmap que no es asinc por eso lo cambie de flatmap a switchmap
      .switchMap(term=> this.service.search(term))
      .subscribe(results => this.items= results);*/
  }
}
