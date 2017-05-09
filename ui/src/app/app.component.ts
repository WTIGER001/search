import { Component, Optional } from '@angular/core';
import { Query } from './swagger/models'
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  q: Query
  opened = false;
  mode = "push"
  model

  constructor(private _api: ApiService) {
    this.q = new Query()
  }

  search() {
    console.log("Issue Search");

    this._api.search(this.q)
  }

  toggleNav() {
    this.opened = !this.opened;
    this.mode = "push"
  }
}
