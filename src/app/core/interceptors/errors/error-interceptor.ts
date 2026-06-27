import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const notification = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 0) {
        notification.error('No Internet Connection');
      }

      else if (error.status === 401) {
        notification.error('Unauthorized');
      }

      else if (error.status === 500) {
        notification.error('Server Error');
      }

      else if (error.error?.errors) {
        Object.values(error.error.errors)
          .flat()
          .forEach((msg: any) => {
            notification.error(msg);
          });
      }

      else {
        notification.error(
          error.error?.message || 'Unexpected Error'
        );
      }

      return throwError(() => error);
    })
  );
};
