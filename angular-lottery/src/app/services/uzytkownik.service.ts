import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Uzytkownik} from "../interfaces/Uzytkownik";

@Injectable({
  providedIn: 'root'
})
export class UzytkownikService {

  constructor(private http: HttpClient) {
    this.getUzytkownik().subscribe(i => {
      console.log(i);
    });
  }

  public getUzytkownik(): Observable<Uzytkownik> {
    return this.http.get<Uzytkownik>("http://127.0.0.1:9000/uzytkownik");
  }

  public postUzytkownik() {
    return this.http.post("http://127.0.0.1:9000/uzytkownik",
      {
        "imie": "Adam" ,
        "nazwisko": "Rezner",
        "haslo": "haselko",
        "email": "adam@mail.com",
        "usuniety": "false",
        "rola": "admin"
      });
  }
}
