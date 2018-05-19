import {Component} from '@angular/core';
import {MiejscaService} from './services/miejsca.service';
import {LoteriaService} from "./services/loteria.service";
import {RegulaminService} from "./services/regulamin.service";
import {UzytkownikService} from "./services/uzytkownik.service";
import {PowiadomienieService} from "./services/powiadomienie.service";
import {WynikiLoteriiService} from "./services/wyniki-loterii.service";
import {ZgloszeniaDoLoteriiService} from "./services/zgloszenia-do-loterii.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private miejsca: MiejscaService,
              private loteria: LoteriaService,
              private regulamin: RegulaminService,
              private powiadomienie: PowiadomienieService,
              private wynikiLoterii: WynikiLoteriiService,
              private zgloszenia: ZgloszeniaDoLoteriiService,
              private uzytkownik: UzytkownikService) {

              this.miejsca.postMiejsce().subscribe(v => {
                console.log("miejsce utwrzone" , v);
              });
              this.regulamin.postRegulamin().subscribe(v => {
                console.log("regulamin utworzony" , v);
              });
              this.loteria.postLoteria().subscribe(v => {
                console.log("Loteria utworzona" , v);
              });
              this.powiadomienie.postPowiadomienie().subscribe(v => {
                console.log("Powiadomienie utworzone" , v);
              });
              this.wynikiLoterii.postWynikiLoterii().subscribe(v => {
                console.log("Wyniki loterii utowrzone", v);
              });
              this.zgloszenia.postZgloszenia().subscribe(v => {
                console.log("Zgloszenie utworzone", v)
              });
  }
  title = 'app';
}
