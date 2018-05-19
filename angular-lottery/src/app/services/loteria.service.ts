import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {  HttpClient } from '@angular/common/http';
import {Loteria} from "../interfaces/Loteria";

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  constructor(private http: HttpClient) {
    this.getLoteria().subscribe(i => {
      console.log(i);
    });
  }

  public getLoteria():Observable<Loteria> {
    return this.http.get<Loteria>("http://127.0.0.1:9000/loteria");
  }

  public postLoteria(loteria: Loteria) {
    return this.http.post("http://127.0.0.1:9000/loteria",
      {
        "id_loterii": loteria.id,
        "data": loteria.data}
    );
  }
}
