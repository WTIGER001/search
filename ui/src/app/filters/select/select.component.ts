import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { OptionsService } from "../../options.service"

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  options: Observable<Array<any>>
  labelName: string
  valueName: string

  v
  constructor(private _optionSvc: OptionsService) {
    this.v = {
      operator: "eq",
      value: "US"
    }
  }

  ngOnInit() {
    this.options = this._optionSvc.getOptions("name", "code");
  }

  @Input() set value(value: boolean) {
    console.log("Setting Value to " + value);
    this.v.value = value
  }

  get value(): boolean {
    return this.v.value
  }
}
