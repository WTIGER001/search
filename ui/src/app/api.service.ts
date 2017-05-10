import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject } from "rxjs/Rx"
import { Query, Results } from './swagger/models'
import { User } from './models/user'
import { Configuration, Filter } from './models/configuration'

@Injectable()
export class ApiService {

  public results: Subject<any[]> = new Subject()
  public cfg: Subject<Configuration> = new Subject()
  public user: Subject<User> = new Subject();

  constructor(private http: Http) {
    // Get the user
    this.loadUser("ft1ab").subscribe(
      u => this.user.next(u)
    )

    // Load the Configuration
    this.user.subscribe(
      u => this.setCurrentConfigurationId(u.defaultConfiguration)
    )
  }

  public getFilterControl(id: string): string {
    return "text"
  }

  public loadUser(id: string): Observable<User> {
    return this.http.get("http://localhost:3000/users/" + id).map(r => r.json())
  }

  public getConfiguration(id: string): Observable<Configuration> {
    return this.http.get("http://localhost:3000/configurations/" + id).map(
      r => r.json())
  }

  public search(q: Query) {
    let url = "http://localhost:3000/data";
    url += "?_page=" + q.page
    url += "&_limit=" + q.limit

    if (q.text !== undefined && q.text.length > 0) {
      url += "&q=" + q.text
    }
    console.log(url);

    this.http.get(url).debounceTime(200)
      .map(r => r.json())
      .subscribe(res => {
        console.log("Got Results " + JSON.stringify(res));
        this.results.next(res)
      })
  }

  public getUser(): Observable<User> {
    return this.user;
  }

  public getConfig(): Observable<Configuration> {
    return this.cfg
  }

  public setCurrentConfiguration(cfg: Configuration) {
    this.cfg.next(cfg)
  }

  public setCurrentConfigurationId(cfgId: string) {
    this.getConfiguration(cfgId).subscribe(
      d => this.setCurrentConfiguration(d)
    )
  }

  public getOptions(labelName: string, valueName: string): Observable<Array<any>> {
    return this.http.get("http://localhost:3000/countries").map(r => {
      let items = r.json();
      let options = [];
      items.forEach(element => {
        options.push({
          "label": element[labelName],
          "value": element[valueName]
        })
      });
      return options;
    })
  }

}
