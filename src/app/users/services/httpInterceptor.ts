import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../user.model';

export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<User>, handler: HttpHandler): Observable<HttpEvent<User>> {
    return handler.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `client side Custom USer Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `server side Custom USer Error: ${error.status}\nMessage: ${error.message}`;
            console.log(error.status)
          }
          console.log("error intercepter \n", errorMessage);
          return throwError(errorMessage);
        })
      )
  }
}