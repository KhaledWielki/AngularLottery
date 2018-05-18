import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiejscaService {

  constructor(private http: HttpClient) { 
    this.getMiejsca();
  }

  public getMiejsca() {
    this.http.get("http://127.0.0.1/api/miejsca").subscribe(v => console.log(v));
  }
}