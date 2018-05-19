import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UstawieniaPowiadomienComponent } from './ustawienia-powiadomien/ustawienia-powiadomien.component';
import { WynikiLosowaniaComponent } from './wyniki-losowania/wyniki-losowania.component';
import { HistoriaLosowanComponent } from './historia-losowan/historia-losowan.component';
import { ZarzadzanieUzytkownikamiComponent } from './zarzadzanie-uzytkownikami/zarzadzanie-uzytkownikami.component';
import {RouterModule, Routes} from "@angular/router";
import {ZgloszeniaDoLoteriiComponent} from "./zgloszenia-do-loterii/zgloszenia-do-loterii.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [UstawieniaPowiadomienComponent,  WynikiLosowaniaComponent, HistoriaLosowanComponent, ZarzadzanieUzytkownikamiComponent, ZgloszeniaDoLoteriiComponent]
})
export class AdminModule { }
