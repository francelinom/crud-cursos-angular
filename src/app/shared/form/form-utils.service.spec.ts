/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormUtilsService } from './form-utils.service';

describe('Service: FormUtils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormUtilsService]
    });
  });

  it('should ...', inject([FormUtilsService], (service: FormUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
