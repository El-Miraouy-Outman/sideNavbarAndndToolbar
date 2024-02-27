import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/User";
import {AppConfig, CONFIG_TOKEN} from "../configuration/config";
import {Console} from "inspector";
import {LocalStorageService} from "./storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http:HttpClient,
              @Inject(CONFIG_TOKEN) private  config:AppConfig,
              private localStorageService :LocalStorageService) {

  }


  loadUser ( ) :Observable<User[]>  {
    const  params=new HttpParams()
      .set("page",1)
      .set("pageSize","10");
     console.log('load user')
     return this.http.get<User[]>(this.config.apiUrl+'/users')

  }
   login(email :string,passWord :string){

    let params =new HttpParams()
      .set('email',email)
      .set('passWord',passWord);
    let options ={
      headers :new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
     return this.http.post(this.config.apiUrl+'/auth/authenticate',params,options);

   }

  getRefreshToken(obj :any){
       console.log("on est dans methode refresh token : ",obj)
      return this.http.post(this.config.apiUrl+'/auth/refresh',obj)
  }
  fetchAllUser():Observable<User[]>  {

    return this.http.get<User[]>(this.config.apiUrl+'/users')
  }

}
