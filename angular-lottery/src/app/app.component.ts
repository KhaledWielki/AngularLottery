import { Component } from '@angular/core';
import { MiejscaService } from './services/miejsca.service';
import {LoteriaService} from "./services/loteria.service";
import {RegulaminService} from "./services/regulamin.service";
import {UzytkownikService} from "./services/uzytkownik.service";
import {ZgloszeniaDoLoteriiService} from "./services/zgloszenia-do-loterii.service";
import {WynikiLoteriiService} from "./services/wyniki-loterii.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private miejsca: MiejscaService,
              private loteria: LoteriaService,
              private regulamin: RegulaminService,
              private uzytkownik: UzytkownikService,
              private zgloszeniaDoLoterii: ZgloszeniaDoLoteriiService,
              private wynikiLoterii: WynikiLoteriiService) {

  }
  title = 'app';
}
