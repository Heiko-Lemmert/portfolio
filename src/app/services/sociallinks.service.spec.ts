import { TestBed } from '@angular/core/testing';

import { SociallinksService } from './sociallinks.service';

describe('SociallinksService', () => {
  let service: SociallinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SociallinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
