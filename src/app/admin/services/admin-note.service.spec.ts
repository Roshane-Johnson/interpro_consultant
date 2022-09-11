import { TestBed } from '@angular/core/testing';

import { AdminNoteService } from './admin-note.service';

describe('AdminNoteService', () => {
  let service: AdminNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
