import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
@Injectable()
export class OptionsService {

  constructor(private _http: Http) {

  }

  public getOptions(labelName: string, valueName: string): Observable<Array<any>> {
    return this._http.get("http://localhost:3000/countries").map(r => {
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
