import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Regulamin} from "../interfaces/Regulamin";

@Injectable({
  providedIn: 'root'
})
export class RegulaminService {

  constructor(private http: HttpClient) {
    this.getRegulamin().subscribe(i => {
      console.log(i);
    });
  }

  public getRegulamin(): Observable<Regulamin> {
    return this.http.get<Regulamin>("http://127.0.0.1:9000/regulamin");
  }

  public postRegulamin() {
    return this.http.post("http://127.0.0.1:9000/regulamin",
      {
        "zawartosc": "REGULAMIN DUZO REGULAMINU"}
    );
  }
}
