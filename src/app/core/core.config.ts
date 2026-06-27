import { ApplicationConfig } from '@angular/core';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading/loading-interceptor';
import { errorInterceptor } from './interceptors/errors/error-interceptor';
import { mockResponseInterceptor } from './interceptors/response/mock-response-interceptor';
export const coreConfig: ApplicationConfig = {
  providers: [
   
 provideHttpClient(
      withInterceptors([
        loadingInterceptor,
        errorInterceptor,
        mockResponseInterceptor
      ])
    ),
     provideAnimationsAsync(),
    provideToastr({
      positionClass: 'toast-top-right',
      timeOut: 2000,
      progressBar: false,
      preventDuplicates: true,
      closeButton: false
    })
  ]
};



