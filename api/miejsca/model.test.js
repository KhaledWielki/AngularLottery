import { Miejsca } from '.'

let miejsca

beforeEach(async () => {
  miejsca = await Miejsca.create({ nr_miejsca: 'test', wolne: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = miejsca.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(miejsca.id)
    expect(view.nr_miejsca).toBe(miejsca.nr_miejsca)
    expect(view.wolne).toBe(miejsca.wolne)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = miejsca.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(miejsca.id)
    expect(view.nr_miejsca).toBe(miejsca.nr_miejsca)
    expect(view.wolne).toBe(miejsca.wolne)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
