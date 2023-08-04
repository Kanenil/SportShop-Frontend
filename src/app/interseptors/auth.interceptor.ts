import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {EventBusService} from "../shared/event-bus.service";
import {EventData} from "../shared/event.class";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private eventBusService: EventBusService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req = request;

    if(request.url !== 'https://accounts.google.com/o/oauth2/v2/auth')
      req = this.addHeaders(request)

    return next.handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            return this.handle401Error(req, next);
          }

          return throwError(() => err)
        }));
  }

  private addHeaders(request:HttpRequest<any>) {
    const token =localStorage.getItem("token")||'';
    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    return request;
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    localStorage.removeItem("token");
    this.eventBusService.emit(new EventData("authorize", null));

    return next.handle(request);
  }
}

export const authInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
