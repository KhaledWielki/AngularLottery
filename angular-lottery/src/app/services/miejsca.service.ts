import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiejscaService {

  constructor(private http: HttpClient) { 
  }

  public getMiejsca() {
    console.log(this.http.get("http://127.0.0.1/miejsca"));
  }
}