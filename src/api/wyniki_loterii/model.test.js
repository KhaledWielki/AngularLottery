import { WynikiLoterii } from '.'

let wynikiLoterii

beforeEach(async () => {
  wynikiLoterii = await WynikiLoterii.create({ id_loterii: 'test', id_uzytkownika: 'test', id_miejsca: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = wynikiLoterii.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(wynikiLoterii.id)
    expect(view.id_loterii).toBe(wynikiLoterii.id_loterii)
    expect(view.id_uzytkownika).toBe(wynikiLoterii.id_uzytkownika)
    expect(view.id_miejsca).toBe(wynikiLoterii.id_miejsca)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = wynikiLoterii.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(wynikiLoterii.id)
    expect(view.id_loterii).toBe(wynikiLoterii.id_loterii)
    expect(view.id_uzytkownika).toBe(wynikiLoterii.id_uzytkownika)
    expect(view.id_miejsca).toBe(wynikiLoterii.id_miejsca)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
