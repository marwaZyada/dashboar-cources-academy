import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const mockResponseInterceptor: HttpInterceptorFn = (req, next) => {
   return next(req).pipe(
    map(event => {

     if (
  event instanceof HttpResponse &&
  req.url.includes('api/') &&
  !event.body?.hasOwnProperty('success')
) {
        return event.clone({
          body: {
            success: true,
            message: 'Success',
            data: event.body
          }
        });
      }

      return event;
    })
  );
};
