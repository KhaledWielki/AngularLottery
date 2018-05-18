import { ZgloszeniaDoLoterii } from '.'

let zgloszeniaDoLoterii

beforeEach(async () => {
  zgloszeniaDoLoterii = await ZgloszeniaDoLoterii.create({ id_uzytkowni: 'test', a id_loterii: 'test', zakceptowany: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = zgloszeniaDoLoterii.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(zgloszeniaDoLoterii.id)
    expect(view.id_uzytkowni).toBe(zgloszeniaDoLoterii.id_uzytkowni)
    expect(view.a id_loterii).toBe(zgloszeniaDoLoterii.a id_loterii)
    expect(view.zakceptowany).toBe(zgloszeniaDoLoterii.zakceptowany)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = zgloszeniaDoLoterii.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(zgloszeniaDoLoterii.id)
    expect(view.id_uzytkowni).toBe(zgloszeniaDoLoterii.id_uzytkowni)
    expect(view.a id_loterii).toBe(zgloszeniaDoLoterii.a id_loterii)
    expect(view.zakceptowany).toBe(zgloszeniaDoLoterii.zakceptowany)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
