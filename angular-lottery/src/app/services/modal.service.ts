import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private message = new BehaviorSubject<string>('');
  private displayMessage = this.message.asObservable();
  private materializeElement: any;

  private hMessage = new BehaviorSubject<string>('');
  hideMessage = this.hMessage.asObservable();

  constructor() { }


  setMessage(str: string) {
    this.message.next(str);
  }

  setVisibility(str: string) {
    this.hMessage.next((str));
  }
}
