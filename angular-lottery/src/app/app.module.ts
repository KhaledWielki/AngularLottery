import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiejscaService } from './services/miejsca.service';
import { LoteriaService } from "./services/loteria.service";
import { HttpClient } from '@angular/common/http';
import {RegulaminService} from "./services/regulamin.service";
import {UzytkownikService} from "./services/uzytkownik.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MiejscaService,
              LoteriaService,
              RegulaminService,
              UzytkownikService,
              HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
