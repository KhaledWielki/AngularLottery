import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Powiadomienie} from "../interfaces/Powiadomienie";

@Injectable({
  providedIn: 'root'
})
export class PowiadomienieService {

  constructor(private http: HttpClient) {
    this.getPowiadomie().subscribe( i => {
      console.log(i);
    })
  }

  public getPowiadomie(): Observable<Powiadomienie> {
    return this.http.get<Powiadomienie>("http://127.0.0.1:9000/powiadomienie");
  }

  public postPowiadomienie(powiadomienie: Powiadomienie) {
    return this.http.post("http://127.0.0.1:9000/powiadomienie",
      {
        "data": powiadomienie.data,
        "tresc": powiadomienie.tresc,
        "tytul": powiadomienie.tytul
      });
  }
}
