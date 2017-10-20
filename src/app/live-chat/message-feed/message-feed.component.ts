import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent {

  @Input() private messages;

  @Input() private user;

  constructor() {}
}
