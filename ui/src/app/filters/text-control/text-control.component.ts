import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FilterControl } from '../filter-control';
import { filterValue } from '../../swagger/models';


@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.css']
})
export class TextControlComponent implements OnInit {
  v: filterValue
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
