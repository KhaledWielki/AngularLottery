import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MiejscaService {

  constructor(private http: HttpClient) { 
  }

  public getMiejsca() {
    

  }
}