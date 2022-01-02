import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommonService} from '../../../services/common/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
  }

  public logout() {
    this._commonService.logout();
  }

  public onFormSubmit(value: NgForm) {

  }

}
