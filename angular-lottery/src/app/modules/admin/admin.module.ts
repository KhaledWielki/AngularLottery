import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UstawieniaPowiadomienComponent } from './ustawienia-powiadomien/ustawienia-powiadomien.component';
import { ZgloszeniDoLoteriiComponent } from './zgloszeni-do-loterii/zgloszeni-do-loterii.component';
import { WynikiLosowaniaComponent } from './wyniki-losowania/wyniki-losowania.component';
import { HistoriaLosowanComponent } from './historia-losowan/historia-losowan.component';
import { ZarzadzanieUzytkownikamiComponent } from './zarzadzanie-uzytkownikami/zarzadzanie-uzytkownikami.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UstawieniaPowiadomienComponent, ZgloszeniDoLoteriiComponent, WynikiLosowaniaComponent, HistoriaLosowanComponent, ZarzadzanieUzytkownikamiComponent]
})
export class AdminModule { }
