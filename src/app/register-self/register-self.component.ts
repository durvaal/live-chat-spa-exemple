import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'app-register-self',
  templateUrl: './register-self.component.html',
  styleUrls: ['./register-self.component.css']
})
export class RegisterSelfComponent implements OnInit {
  
  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  signIn(username: string) {
    this.chatService.messages.next({
      type: 'sigin',
      data: username
    });
    window.sessionStorage.setItem('username', username);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    window.sessionStorage.removeItem('username')
  }
}
