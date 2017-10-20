import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebSocketService } from './web-socket.service';

const CHAT_URL = 'ws://live-chat-spa-example.herokuapp.com';

export interface Message {
	author: string,
	message: string
}

@Injectable()
export class ChatService {

	public messages: Subject<any>;

	constructor(wsService: WebSocketService) {
		this.messages = <Subject<any>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): any => {
				return JSON.parse(response.data);
			});
	}
}