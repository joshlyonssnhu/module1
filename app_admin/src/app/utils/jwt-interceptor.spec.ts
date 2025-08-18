import { TestBed } from '@angular/core/testing';
import { jwtInterceptor } from './jwt-interceptor';
import { Authentication } from '../services/authentication';

describe('jwtInterceptor', () => {
  let interceptor: jwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        jwtInterceptor,
        {
          provide: Authentication,
          useValue: {
            isLoggedIn: () => true,
            getToken: () => 'fake-token'
          }
        }
      ]
    });

    interceptor = TestBed.inject(jwtInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
