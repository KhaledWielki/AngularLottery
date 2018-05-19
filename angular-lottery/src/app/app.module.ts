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

import { LoginModule } from "./modules/login/login.module";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', loadChildren: 'app/modules/login/login.module'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
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
