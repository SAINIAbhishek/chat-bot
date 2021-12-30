import { Component, OnInit } from '@angular/core';
import {Conversation} from '../../models/conversation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  conversations: Array<Conversation> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
