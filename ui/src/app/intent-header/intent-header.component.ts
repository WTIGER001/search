import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intent-header',
  templateUrl: './intent-header.component.html',
  styleUrls: ['./intent-header.component.css']
})
export class IntentHeaderComponent implements OnInit {
  isIntentActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }


}
