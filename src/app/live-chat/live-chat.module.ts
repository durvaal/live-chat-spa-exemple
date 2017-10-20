import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LiveChatComponent } from './live-chat.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { MessageItemComponent } from './message-feed/message-item/message-item.component';
import { MessageSendComponent } from './message-send/message-send.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';

import { ConversationManagerService } from './shared/conversation-manager.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LiveChatComponent,
    MessageFeedComponent,
    MessageItemComponent,
    MessageSendComponent,
    UserListComponent,
    UserItemComponent
  ],
  providers: [
    ConversationManagerService
  ]
})
export class LiveChatModule { }
