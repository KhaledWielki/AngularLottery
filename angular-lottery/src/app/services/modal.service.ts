import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _message = new BehaviorSubject<string>('');
  private _displayMessage = this._message.asObservable();
  private _materializeElement: any;

  constructor() { }


  get message(): BehaviorSubject<string> {
    return this._message;
  }

  set message(value: BehaviorSubject<string>) {
    this._message = value;
  }

  get displayMessage(): Observable<string> {
    return this._displayMessage;
  }

  set displayMessage(value: Observable<string>) {
    this._displayMessage = value;
  }

  get materializeElement(): any {
    return this._materializeElement;
  }

  set materializeElement(value: any) {
    this._materializeElement = value;
  }
}
