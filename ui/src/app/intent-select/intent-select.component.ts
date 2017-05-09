import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { Http } from '@angular/http';

@Component({
  selector: 'app-intent-select',
  templateUrl: './intent-select.component.html',
  styleUrls: ['./intent-select.component.css']
})
export class IntentSelectComponent implements OnInit {
  s: any[]
  actions: any[] = []

  constructor(private _http: Http) {

  }

  ngOnInit() {
    this.update()
  }

  @Input() set selected(arr: any[]) {

    this.s = arr
    this.update();
  }

  get selected(): any[] {
    return this.s
  }

  public isDisabled(o: IntentItem): boolean {
    let value = true;
    if (o.noun === "Configuration") {
      value = false;
    } else if (this.s.length > 0) {
      value = false;
    }
    return value
  }

  public isDivider(o) {
    return typeof o == "string"
  }

  /**
   * Launch the Intent Manager
   */
  public handleIntentAction(item: IntentItem) {
    alert("Handling Intent " + item.name);
  }

  private update() {
    this._http.get("http://localhost:3000/intents").map(r => r.json()).subscribe(a => {

      let items = {}
      a.forEach(item => {
        if (items[item.verb] === undefined) {
          items[item.verb] = []
        }
        items[item.verb].push(item)
      });

      let r = []
      for (var k in items) {
        items[k].forEach(i => {
          r.push(i)
        });
        r.push("Divider")
      }
      if (r.length > 0) {
        r.splice(r.length - 1, 1)
      }

      // this.actions.next(r);
      this.actions = r;
    })
  }

}

class IntentItem {
  icon: string
  name: string
  tooltip: string
  url: string
  noun: string
  verb: string
}
