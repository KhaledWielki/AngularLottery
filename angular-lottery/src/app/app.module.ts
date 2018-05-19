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
import { UserModule } from "./modules/user/user.module";
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './common/menu/menu.component';
import { FooterComponent } from './common/footer/footer.component';

import { MaterializeModule } from 'angular2-materialize';
import { AdminModule } from './modules/admin/admin.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalService} from "./services/modal.service";


const appRoutes: Routes = [
  { path: 'a', loadChildren: 'app/modules/login/login.module'},
  { path: 'a', loadChildren: 'app/modules/user/user.module'},
  { path: 'a', loadChildren: 'app/modules/admin/admin.module'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    HttpClientModule,
    LoginModule,
    UserModule,
    AdminModule,
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
              ModalService,
              HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
