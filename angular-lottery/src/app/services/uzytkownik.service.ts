import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {UzytkownikI} from "../interfaces/Uzytkownik";

@Injectable({
  providedIn: 'root'
})
export class UzytkownikService {

  constructor(private http: HttpClient) {
    this.getUzytkownik().subscribe(i => {
      console.log(i);
    });
  }

  public getUzytkownik(): Observable<UzytkownikI> {
    return this.http.get<UzytkownikI>("http://127.0.0.1:9000/uzytkownik");
  }

  public postUzytkownik(uzytkownik: UzytkownikI) {
    return this.http.post("http://127.0.0.1:9000/uzytkownik",
      {
        "imie": uzytkownik.imie,
        "nazwisko": uzytkownik.nazwisko,
        "haslo": uzytkownik.haslo,
        "email": uzytkownik.email,
        "usuniety": uzytkownik.usuniety,
        "rola": uzytkownik.rola
      });
  }
}
