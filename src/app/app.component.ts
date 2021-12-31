import { Component } from '@angular/core';
import {Conversation} from './models/conversation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get conversation(): Conversation {
    return this._conversation;
  }

  private _conversation: Conversation = <Conversation>{};

  public onConversationClicked(event: Conversation) {
    this._conversation = event;
  }

}
