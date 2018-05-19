import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {ZgloszeniaDoLoterii} from "../interfaces/ZgloszeniaDoLoterii";

@Injectable({
  providedIn: 'root'
})
export class ZgloszeniaDoLoteriiService {

  constructor(private http: HttpClient) {
    this.getZgloszenia().subscribe( i => {
      console.log(i);
    })
  }

  public getZgloszenia(): Observable<ZgloszeniaDoLoterii> {
    return this.http.get<ZgloszeniaDoLoterii>("http://127.0.0.1:9000/zgloszeniaDoLoterii");
  }

  public postZgloszenia(zgloszenia: ZgloszeniaDoLoterii) {
    return this.http.post("http://127.0.0.1:9000/zgloszeniaDoLoterii",
      {
        "id_uzytkownika": zgloszenia.id_uzytkownika,
        "id_loterii": zgloszenia.id_loterii,
        "zaakceptowany": zgloszenia.zaakcepotawany
      });
  }
}
