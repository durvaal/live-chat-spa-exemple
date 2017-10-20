import { Component } from '@angular/core';
import { ChatService } from '../shared/chat.service';

export interface User {
  author: string;
  color: string
}

export interface Message {
  time: Date;
  text: string;
  author: string;
  color: string;
}

export type history = Array<Message>;


export interface contact {
  name: string;
  color: string;
}

export type contacts = Array<contact>;


@Component({
  selector: 'app-register-self',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent {

  private history: history = [];

  private user: User;

  private contacts: contacts;

  private isMyIdentification: boolean = true;

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(res => {
      console.log(res)
      switch (res.type) {
        case 'color':
          if(this.isMyIdentification) {
            this.user = res.data;
            this.isMyIdentification = false;
          }
          break;
        case 'history':
          this.history = res.data;
          if(!!!this.user) {
            this.chatService.messages.next({
              type: 'sigin',
              data: window.sessionStorage.getItem('username')
            });
          }
          break;
        case 'contacts':
          this.contacts = res.data;
          break;
        }
        console.log("Response from websocket: " + res.data.color);
    });
  }
}
