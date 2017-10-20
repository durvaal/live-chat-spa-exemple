import { TestBed, inject } from '@angular/core/testing';

import { ConversationManagerService } from './conversation-manager.service';

describe('ConversationManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversationManagerService]
    });
  });

  it('should be created', inject([ConversationManagerService], (service: ConversationManagerService) => {
    expect(service).toBeTruthy();
  }));
});
