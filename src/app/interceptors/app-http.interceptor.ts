import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {catchError, Observable, of, throwError} from "rxjs";
import {UserService} from "../services/user.service";
import {LocalStorageService} from "../services/storage/local-storage.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {throws} from "assert";
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
   cpt =0;
  constructor(private userService :UserService,private localStorageService :LocalStorageService) {
  }

     intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes("/authenticate")) {
       if(!request.url.includes("/refresh")){
         console.log(' appel pour d\'autre lien sont refresh : ')
         let newRequest = request.clone({
           headers: request.headers.set('Authorization', 'Bearer ' + this.localStorageService.getAccessToken())
         })
         return next.handle(newRequest).pipe(catchError(x => this.handleError(x)));
       }
       else {
         console.log(' appel backend refresh : ')
         let newRequest = request.clone({
           headers: request.headers.set('Authorization', 'Bearer ' + this.localStorageService.getRefreshToken())
         })
         return next.handle(newRequest);
       }
       }

    else {
      console.log('hello  login by authentication : ')
      return next.handle(request)
    }
  }

  private handleError(error: HttpErrorResponse) :Observable<any>{
    console.log("on a un erreur : .....?")
    const refreshToken=this.localStorageService.getRefreshToken();
    console.log('refresh token quond va envoyez est : ',refreshToken)
     if(error.status === 401 && this.cpt !=1){
       console.log("erreur est 401  : .........")
       this.cpt ++;
       this.userService.getRefreshToken(refreshToken).subscribe({
         next : (res:any) =>{

           console.log(" ====Votre Refresh Token   est mis a jours ===",res)
           return of("Votre Refresh Token   est mis a jours")
           this.localStorageService.setAccessToken(res.accessToken);
           console.log("new acces token :",this.localStorageService.getAccessToken());
         },
         error : err => {
           console.log(error.error);
           this.localStorageService.setIsUserLoggedIn(false);
           this.localStorageService.removeToken()
           console.log("!!!!!revoke token is success ")
         }
       });
       return of("Attempting to refrech token ");
     }
     else {
       this.cpt=0;
       this.localStorageService.setIsUserLoggedIn(false);
       this.localStorageService.removeToken()
       return throwError(()=> new Error("Non Authentication erreur "))
     }
  }


}
