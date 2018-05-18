import { Uzytkownik } from '.'

let uzytkownik

beforeEach(async () => {
  uzytkownik = await Uzytkownik.create({ imie: 'test', nazwisko: 'test', haslo: 'test', email: 'test', usuniety: 'test', rola: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = uzytkownik.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(uzytkownik.id)
    expect(view.imie).toBe(uzytkownik.imie)
    expect(view.nazwisko).toBe(uzytkownik.nazwisko)
    expect(view.haslo).toBe(uzytkownik.haslo)
    expect(view.email).toBe(uzytkownik.email)
    expect(view.usuniety).toBe(uzytkownik.usuniety)
    expect(view.rola).toBe(uzytkownik.rola)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = uzytkownik.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(uzytkownik.id)
    expect(view.imie).toBe(uzytkownik.imie)
    expect(view.nazwisko).toBe(uzytkownik.nazwisko)
    expect(view.haslo).toBe(uzytkownik.haslo)
    expect(view.email).toBe(uzytkownik.email)
    expect(view.usuniety).toBe(uzytkownik.usuniety)
    expect(view.rola).toBe(uzytkownik.rola)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
