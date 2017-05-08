import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _opened: boolean = false;
  private mode = "push";


  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this._opened = !this._opened;
    this.mode = "push"
  }
}
