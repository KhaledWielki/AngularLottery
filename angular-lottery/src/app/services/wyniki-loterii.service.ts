import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {WynikiLoterii} from "../interfaces/WynikiLoterii";

@Injectable({
  providedIn: 'root'
})
export class WynikiLoteriiService {

  constructor(private http: HttpClient) {
    this.getWynikiLoterii().subscribe( i => {
      console.log(i);
    });
  }

  public getWynikiLoterii(): Observable<WynikiLoterii> {
    return this.http.get<WynikiLoterii>("http://127.0.0.1:9000/wynikiLoterii");
  }

  public postWynikiLoterii(wyniki: WynikiLoterii) {
    return this.http.post("http://127.0.0.1:9000/wynikiLoterii",
      {
        "id_loterii": wyniki.id_loterii,
        "id_uzytkownika": wyniki.id_uzytkownika,
        "id_miejsca": wyniki.id_miejsca
      });
  }
}
