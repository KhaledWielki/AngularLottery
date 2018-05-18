import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiejscaService } from './services/miejsca.service';
import { LoteriaService } from "./services/loteria.service";
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MiejscaService,
              LoteriaService,
              HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
