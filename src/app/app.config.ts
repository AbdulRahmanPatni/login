import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'zportal-dev.us.auth0.com',
        clientId: 'Yx55J9GZuM1pDURKGegWlw6iBbq5uigO',
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      })
    ),
  ],
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

// , AuthModule.forRoot({
//   domain:'zportal-dev.us.auth0.com',
//   clientId: 'Yx55J9GZuM1pDURKGegWlw6iBbq5uigO',
//   authorizationParams: {
//     redirect_uri: window.location.origin
//   }
// }),
