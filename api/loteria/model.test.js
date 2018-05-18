import { Loteria } from '.'

let loteria

beforeEach(async () => {
  loteria = await Loteria.create({ nazwa: 'test', data: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = loteria.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(loteria.id)
    expect(view.nazwa).toBe(loteria.nazwa)
    expect(view.data).toBe(loteria.data)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = loteria.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(loteria.id)
    expect(view.nazwa).toBe(loteria.nazwa)
    expect(view.data).toBe(loteria.data)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
