import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx"
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  // user: Observable<User>;
  u: User;
  constructor(private _api: ApiService, private modalService: NgbModal) {
    this._api.user.subscribe(u => this.u = u)
  }

  ngOnInit() {

  }

  showAboutMe(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  closeResult: string;
}
