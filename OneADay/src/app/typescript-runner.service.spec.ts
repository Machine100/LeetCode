import { TestBed } from '@angular/core/testing';

import { TypescriptRunnerService } from './typescript-runner.service';

describe('TypescriptRunnerService', () => {
  let service: TypescriptRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypescriptRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
