import {Inject, Injectable} from '@angular/core';
import * as http from "http";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AppConfig, CONFIG_TOKEN} from "../configuration/config";
import {Observable} from "rxjs";
import {Ticket} from "../models/Ticket";
import {Customer} from "../models/Customer";
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor( private toast:NgToastService) { }
  showSuccess(msg:string) {
    console.log(" show succeess")
    this.toast.info({detail:"SUCCESS",summary:msg,duration:5000,position :"botomCenter"});
  }

  showError(msg:string) {
    this.toast.error({detail:"ERROR",summary:msg,duration:5000,position : "botomCenter"});
  }

  showInfo(msg:string) {
    this.toast.info({detail:"INFO",summary:msg,duration:5000,sticky:true,position : "botomCenter"});
  }

  showWarn(msg:string) {
    this.toast.warning({detail:"WARN",summary:msg,duration:5000,position : "botomCenter"});
  }
}
