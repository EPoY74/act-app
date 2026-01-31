import { TestBed } from '@angular/core/testing';

import { StorageServicesTs } from './storage.services.ts';

describe('StorageServicesTs', () => {
  let service: StorageServicesTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageServicesTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
