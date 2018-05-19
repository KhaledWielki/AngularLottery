import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { PowiadomieniaComponent } from './powiadomienia/powiadomienia.component';
import { MapkaComponent } from './mapka/mapka.component';
import { LoteriaComponent } from './loteria/loteria.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'loteria',
        component: LoteriaComponent
      },
      {
        path: 'regulamin',
        component: RegulaminComponent
      },
      {
        path: 'powiadomienia',
        component: PowiadomieniaComponent
      },
      {
        path: 'mapka',
        component: MapkaComponent
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
  declarations: [RegulaminComponent, PowiadomieniaComponent, MapkaComponent, LoteriaComponent]
})
export class UserModule { }
