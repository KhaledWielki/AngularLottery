import { UzytkownikI } from "../interfaces/Uzytkownik";

export class Uzytkownik implements UzytkownikI {
  id: number;
  imie: string;
  nazwisko: string;
  haslo: string;
  email: string;
  usuniety: boolean;
  rola: string

  constructor(id, imie, naziwsko, haslo, email, usuniety, rola) {
    this.id = id;
    this.imie = imie;
    this.haslo = haslo;
    this.nazwisko = naziwsko;
    this.email = email;
    this.usuniety = usuniety;
    this.rola = rola;
  }
}