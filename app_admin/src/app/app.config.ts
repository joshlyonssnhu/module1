import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { routes } from './app.routes';
import { jwtInterceptor } from './utils/jwt-interceptor';

export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: jwtInterceptor, multi: true};


export const appConfig: ApplicationConfig = {
  providers: [
    //provideBrowserGlobalErrorListeners(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    authInterceptProvider
  ]
};




