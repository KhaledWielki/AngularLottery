import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UstawieniaPowiadomienComponent } from './ustawienia-powiadomien/ustawienia-powiadomien.component';
import { WynikiLosowaniaComponent } from './wyniki-losowania/wyniki-losowania.component';
import { HistoriaLosowanComponent } from './historia-losowan/historia-losowan.component';
import { ZarzadzanieUzytkownikamiComponent } from './zarzadzanie-uzytkownikami/zarzadzanie-uzytkownikami.component';
import {RouterModule, Routes} from "@angular/router";
import {ZgloszeniaDoLoteriiService} from "../../services/zgloszenia-do-loterii.service";
import {ZgloszeniaDoLoteriiComponent} from "./zgloszenia-do-loterii/zgloszenia-do-loterii.component";


const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'historiaLosowan',
        component: HistoriaLosowanComponent
      },
      {
        path: 'ustawieniaPowiadomien',
        component: UstawieniaPowiadomienComponent
      },
      {
        path: 'wynikiLosowan',
        component: WynikiLosowaniaComponent
      },
      {
        path: 'zarzadzanieUzytkownikami',
        component: ZarzadzanieUzytkownikamiComponent
      },
      {
        path: 'zgloszeniaDoLoterii',
        component: ZgloszeniaDoLoteriiComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [UstawieniaPowiadomienComponent, ZgloszeniaDoLoteriiService, WynikiLosowaniaComponent, HistoriaLosowanComponent, ZarzadzanieUzytkownikamiComponent]
})
export class AdminModule { }
