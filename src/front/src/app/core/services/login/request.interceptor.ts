import { Injectable } from '@angular/core';
import { HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpSentEvent,
    HttpUserEvent }
    from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

            if(this.tokenService.hasToken()) {
                const token = this.tokenService.getToken();
                req = req.clone({
                  setHeaders: {
                    'Content-Type' : 'application/json; charset=utf-8',
                    'Accept'       : 'application/json',
                    'Authorization': `Bearer ${this.tokenService.getToken()}`,
                  },
                });
            }
        return next.handle(req);

    }

}
