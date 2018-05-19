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
  uzytkownicy;

  constructor(private uzytkownikService: UzytkownikService) { 
    this.uzytkownik = new Uzytkownik('', '', '', 'test123', '', 'false', '');
    this.getUsers();
  }

  private getUsers() {
    this.uzytkownikService.getUzytkownik().subscribe(users => {
      this.uzytkownicy = users.rows;
    });
  }


  public edit(uzytkownik) {
    this.uzytkownikService.updateUzytkownik(uzytkownik).subscribe(u => console.log(u));
    this.getUsers();
  }
  public add() {
    console.log(this.uzytkownik);
    this.uzytkownikService.postUzytkownik(this.uzytkownik).subscribe(v => console.log(v));
    this.getUsers();
  }

  ngOnInit() {
  }

}
