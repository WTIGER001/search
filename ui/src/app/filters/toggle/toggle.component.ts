import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  v
  constructor() {
    this.v = {
      operator: "eq",
      value: false
    }
  }
  ngOnInit() {
  }

  @Input() set value(value: boolean) {
    console.log("Setting Value to " + value);

    this.v.value = value
  }

  get value(): boolean {
    return this.v.value
  }
}
