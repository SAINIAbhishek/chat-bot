import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Conversation} from '../../../models/conversation';
import {conversations} from '../../../models/static-data/conversations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get conversations(): Array<Conversation> {
    return this._conversations;
  }

  get selected(): Conversation {
    return this._selected;
  }

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  get filteredConversations() {
    return this._conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this._searchText.toLowerCase()) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this._searchText.toLowerCase())
      );
    });
  }

  private _conversations: Array<Conversation> = conversations;

  @Output() conversationClicked: EventEmitter<Conversation> = new EventEmitter<Conversation>();

  private _selected: Conversation = <Conversation>{};

  private _searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectConversation(value: Conversation) {
    this._selected = value;
    this.conversationClicked.emit(value);
  }

}
