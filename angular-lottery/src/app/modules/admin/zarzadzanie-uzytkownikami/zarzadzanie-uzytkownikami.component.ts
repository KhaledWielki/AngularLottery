import { Component, OnInit } from '@angular/core';
import { UzytkownikService } from '../../../services/uzytkownik.service';
import { UzytkownikI} from '../../../interfaces/Uzytkownik';
import { Uzytkownik } from '../../../classes/uzytkownik';

import { FormsModule , FormControl, NgForm, NgModel} from '@angular/forms';


@Component({
  selector: 'app-zarzadzanie-uzytkownikami',
  templateUrl: './zarzadzanie-uzytkownikami.component.html',
  styleUrls: ['./zarzadzanie-uzytkownikami.component.css']
})
export class ZarzadzanieUzytkownikamiComponent implements OnInit {
  uzytkownik: Uzytkownik;

  constructor(private uzytkownikService: UzytkownikService) { 
    this.uzytkownik = new Uzytkownik('', '', '', '', '', '', '');
  }

  public add() {
    console.log(this.uzytkownik);
    //this.uzytkownikService.postUzytkownik(this.uzytkownik);
  }

  ngOnInit() {
  }

}
