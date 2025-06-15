import { TestBed } from '@angular/core/testing';

import { SkillListService } from './skill-list.service';

describe('SkillsService', () => {
  let service: SkillListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
