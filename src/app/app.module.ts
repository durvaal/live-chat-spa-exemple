import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import { LiveChatModule } from './live-chat/live-chat.module';

import { AppComponent } from './app.component';
import { RegisterSelfComponent } from './register-self/register-self.component';

import { WebSocketService } from './shared/web-socket.service';
import { ChatService } from './shared/chat.service';

import { AuthGuard } from './app.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterSelfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LiveChatModule
  ],
  providers: [WebSocketService, ChatService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
