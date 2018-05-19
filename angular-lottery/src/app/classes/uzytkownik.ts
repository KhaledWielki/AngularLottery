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

  validate():boolean {
    return this.imie.length > 0 && this.nazwisko.length > 0 && this.haslo.length > 0 && this.email.length > 0 && this.usuniety === false && this.rola.length > 0;
  }
}