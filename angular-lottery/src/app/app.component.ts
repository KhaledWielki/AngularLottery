import { Component } from '@angular/core';
import { MiejscaService } from './services/miejsca.service';
import {LoteriaService} from "./services/loteria.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private miejsca: MiejscaService,
              private  loteria: LoteriaService) {

  }
  title = 'app';
}
