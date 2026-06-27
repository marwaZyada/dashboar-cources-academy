import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

  success(
    message: string,
    title: string = 'Success',
    options?: Partial<IndividualConfig>
  ): void {
    this.toastr.success(message, title,{
   
    toastClass: 'ngx-toastr custom-success-toast',
    });
  }



  error(
    message: string,
    title: string = 'Error',
    options?: Partial<IndividualConfig>
  ): void {
    this.toastr.error(message, title,  { toastClass: 'ngx-toastr custom-error-toast',});
  }

  warning(
    message: string,
    title: string = 'Warning',
    options?: Partial<IndividualConfig>
  ): void {
    this.toastr.warning(message, title,{ toastClass: 'ngx-toastr custom-warning-toast',});
  }

  info(
    message: string,
    title: string = 'Info',
    options?: Partial<IndividualConfig>
  ): void {
    this.toastr.info(message, title, { toastClass: 'ngx-toastr custom-info-toast',});
  }

  // 🔥 Helpers جاهزة للاستخدام في API

  apiSuccess(message: string): void {
    this.success(message, 'Success');
  }

  apiError(message: string): void {
    this.error(message, 'Error');
  }

  validationError(message: string): void {
    this.warning(message, 'Validation Error');
  }

  serverError(): void {
    this.error('Something went wrong on the server', 'Server Error');
  }

  unauthorized(): void {
    this.error('You are not authorized', '401');
  }
}
