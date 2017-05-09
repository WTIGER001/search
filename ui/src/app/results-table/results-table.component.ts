import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ApiService } from '../api.service'
import { Query } from '../swagger/models'

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  rows = []
  selected = []
  limit = 10
  actionsEnabled = false
  @Input() q: Query

  constructor(private _api: ApiService) {
    this._api.results.subscribe(r => {
      this.rows.splice(0, this.rows.length)
      this.rows.push(...r)
    })
  }

  ngOnInit() {
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.actionsEnabled = this.selected.length > 0
  }

  /**
  * Populate the table with new data based on the page number
  * @param page The page to select
  */
  setPage(pageInfo) {
    console.log("Setting Page to " + pageInfo.offset);
    this.q.page = pageInfo.offset
    //this._api.search(this.q)
  }
}
