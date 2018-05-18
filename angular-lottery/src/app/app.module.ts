import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiejscaService } from './services/miejsca.service';
import { LoteriaService } from "./services/loteria.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MiejscaService,
              LoteriaService,
              HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
