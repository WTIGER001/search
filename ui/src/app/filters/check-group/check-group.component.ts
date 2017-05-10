import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FilterControl } from '../filter-control';
import { FilterValue } from '../../swagger/models';

@Component({
  selector: 'app-check-group',
  templateUrl: './check-group.component.html',
  styleUrls: ['./check-group.component.css']
})
export class CheckGroupComponent implements OnInit {
  v: FilterValue
  constructor() {
    this.v = {
      operator: "eq",
      value: ""
    }
  }

  ngOnInit() {

  }

  @Input() set value(value: string) {
    console.log("Setting Value to " + value);

    this.v.value = value
  }

  get value(): string {
    return this.v.value
  }

}