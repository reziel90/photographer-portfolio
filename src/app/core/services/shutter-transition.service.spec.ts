import { TestBed } from '@angular/core/testing';

import { ShutterTransitionService } from './shutter-transition.service';

describe('ShutterTransitionService', () => {
  let service: ShutterTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShutterTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
