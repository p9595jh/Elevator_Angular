/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandleuserService } from './handleuser.service';

describe('HandleuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleuserService]
    });
  });

  it('should ...', inject([HandleuserService], (service: HandleuserService) => {
    expect(service).toBeTruthy();
  }));
});
