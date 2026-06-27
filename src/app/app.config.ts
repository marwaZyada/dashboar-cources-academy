import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/mock/in-memory-data.service';
import { coreConfig } from '@core/core.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    ...coreConfig.providers,
  
      importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService,
        {
          delay: 500
        }
      )
    )
  ]
};
