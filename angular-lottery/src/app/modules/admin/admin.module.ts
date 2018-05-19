import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UstawieniaPowiadomienComponent } from './ustawienia-powiadomien/ustawienia-powiadomien.component';
import { ZgloszeniDoLoteriiComponent } from './zgloszeni-do-loterii/zgloszeni-do-loterii.component';
import { WynikiLosowaniaComponent } from './wyniki-losowania/wyniki-losowania.component';
import { HistoriaLosowanComponent } from './historia-losowan/historia-losowan.component';
import { ZarzadzanieUzytkownikamiComponent } from './zarzadzanie-uzytkownikami/zarzadzanie-uzytkownikami.component';
import {RouterModule, Routes} from "@angular/router";


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
        path: 'zgloszeniDoLoterii',
        component: ZgloszeniDoLoteriiComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [UstawieniaPowiadomienComponent, ZgloszeniDoLoteriiComponent, WynikiLosowaniaComponent, HistoriaLosowanComponent, ZarzadzanieUzytkownikamiComponent]
})
export class AdminModule { }
