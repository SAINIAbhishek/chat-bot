import {Message} from './message';

export interface Conversation {
  id: string
  name: string;
  time?: string;
  latestMessage?: string;
  latestMessageRead?: boolean;
  messages?: Array<Message>;
}
