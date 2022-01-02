import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
  }

  public login(event: Event) {
    event.preventDefault();
    this._commonService.loginWithGoogle();
  }

}
