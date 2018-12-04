/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandleboardService } from './handleboard.service';

describe('HandleboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleboardService]
    });
  });

  it('should ...', inject([HandleboardService], (service: HandleboardService) => {
    expect(service).toBeTruthy();
  }));
});
