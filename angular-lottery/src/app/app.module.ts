import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiejscaService } from './services/miejsca.service';
import { LoteriaService } from "./services/loteria.service";
import {RegulaminService} from "./services/regulamin.service";
import {UzytkownikService} from "./services/uzytkownik.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ZgloszeniaDoLoteriiService} from "./services/zgloszenia-do-loterii.service";
import {WynikiLoteriiService} from "./services/wyniki-loterii.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MiejscaService,
              LoteriaService,
              RegulaminService,
              UzytkownikService,
              ZgloszeniaDoLoteriiService,
              WynikiLoteriiService,
              HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
