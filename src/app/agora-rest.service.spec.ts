import { TestBed } from '@angular/core/testing';

import { AgoraRESTService } from './agora-rest.service';

describe('AgoraRESTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgoraRESTService = TestBed.get(AgoraRESTService);
    expect(service).toBeTruthy();
  });
});
