import { Injectable } from '@angular/core';

@Injectable()
export class ConversationManagerService {

  private currentContact;

  constructor() { }

  getCurrentContact() {
    return this.currentContact;
  }

  setCurrentContact(contact) {
    this.currentContact = contact;
  }
}
