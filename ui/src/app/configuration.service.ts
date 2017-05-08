import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { ApiClientService } from './swagger'
import { query, results } from './swagger/models'
import { Configuration, Filter } from './models/configuration'

@Injectable()
export class ConfigurationService {
  public cfg: Configuration
  public api: ApiClientService
  constructor(private http: Http) {
    this.api = new ApiClientService(http);
  }

  // public getConfiguration(id: string): Configuration {
  //   this.http.get("http://localhost:3000/configurations/" + id).

  //   return null
  // }

  public getConfiguration(id: string): Observable<Configuration> {
    return this.http.get("http://localhost:3000/configurations/" + id).map(r => r.json())
  }

  /**
   * Get the Filter Control that is associated with the datafield ID. The Control
   * is the ID of the control (which is an angular component) that will be shown
   * on the filter list
   */
  public getFilterControl(id: string): string {
    return ""
  }

  public sendQuery(q: query): Observable<results> {

    return this.api.getSearch(q).debounceTime(200)

  }

}
