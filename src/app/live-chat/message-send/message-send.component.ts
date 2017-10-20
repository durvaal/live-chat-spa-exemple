import { Component, Input } from '@angular/core';

import { ConversationManagerService } from '../shared/conversation-manager.service';
import { WebSocketService } from '../../shared/web-socket.service';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.css']
})
export class MessageSendComponent {
  
  private message: string;

  @Input() private user;

  constructor(
    private chatService: ChatService,
    private conversationManager: ConversationManagerService
  ) { }

  sendMsg() {
    console.log({
      text: this.message,
      sendFrom: this.getUserColor(),
      sendTo: this.getCurrentContact()
    })
		console.log('new message from client to websocket: ', this.message);
		this.chatService.messages.next({
      type: 'broadcast',
      data: {
        text: this.message,
      }
    });
    this.message = '';
  }

  getUserColor() {
    return !!this.user? this.user.color: "";
  }
  
  getCurrentContact() {
    let currentContact =  this.conversationManager.getCurrentContact();
    if(!!currentContact) {
      return currentContact.color
    }
    return ""
  }
}
