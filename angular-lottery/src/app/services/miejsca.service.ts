import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {  Miejsce } from '../interfaces/Miejsce';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MiejscaService {

  constructor(private http: HttpClient) {
    this.getMiejsca().subscribe(i => {
      console.log(i);
    });
  }

  public getMiejsca():Observable<Miejsce> {
    return this.http.get<Miejsce>("http://127.0.0.1:9000/miejsca");
  }

  public postMiejsce(miejsce: Miejsce) {
    return this.http.post("http://127.0.0.1:9000/miejsca",
      {
        "nr_miejsca": miejsce.nr_miejsca,
        "wolne": miejsce.wolne }
    );
  }
}
