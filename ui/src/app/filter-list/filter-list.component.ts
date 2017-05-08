import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ConfigurationService } from '../configuration.service'
import { UserService } from '../user.service'
import { Configuration, Filter } from '../models/configuration'
import { query } from '../swagger/models'
import { FilterControl } from '../filters/filter-control'
import { TextControlComponent } from '../filters/text-control/text-control.component'

/**
 * Lists all the filters in a configuration
 */
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  public showAll: boolean
  // public filters: Filter[]
  private cfg: Configuration
  @Input() q: query


  constructor(
    private _cfgService: ConfigurationService,
    private _userService: UserService) {
  }

  ngOnInit() {
    // this.cfg = this._userService.getCurrentConfiguration()
    // this.filters = this.cfg.filters
    this._userService.getConfig().subscribe(cfg => {
      console.log("Setting CFG " + JSON.stringify(cfg));
      this.cfg = cfg
    });
  }

  public get configuration(): Observable<Configuration> {
    return this._cfgService.getConfiguration(this._userService.user.defaultConfiguration)
  }


}
