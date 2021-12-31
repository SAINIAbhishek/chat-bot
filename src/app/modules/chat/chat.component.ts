import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conversation} from '../../models/conversation';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  get emojiPickerVisible(): boolean {
    return this._emojiPickerVisible;
  }

  set emojiPickerVisible(value: boolean) {
    this._emojiPickerVisible = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  @Input() conversation: Conversation = <Conversation>{};

  private _emojiPickerVisible = false;

  private _message = '';

  constructor() { }

  ngOnInit(): void {
  }

  public emojiClicked(event) {
    this._message += event.emoji.native;
    this._emojiPickerVisible = false;
  }

  public submit(event) {
    let value = event.target.value.trim();
    this._message = '';
    if (value.length < 1) return false;
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '10:21',
      me: true,
    });
  }

}
