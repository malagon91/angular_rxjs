import {Injectable} from '@angular/core';
import {URLSearchParams,Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WikipediaSearchService{
  constructor( private json:Jsonp){}

  search(terms: Observable<string>){
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term=> this.rawsearch(term));

  }
  rawsearch(term:string){
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    let obs = this.json.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map(response  => response.json()[1]);
    if (term.length === 2) {
      obs = obs.delay(1000);
    }
    return obs;

  }
  searchExample(){
    
  }
}

