import { Regulamin } from '.'

let regulamin

beforeEach(async () => {
  regulamin = await Regulamin.create({ zawartosc: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = regulamin.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(regulamin.id)
    expect(view.zawartosc).toBe(regulamin.zawartosc)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = regulamin.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(regulamin.id)
    expect(view.zawartosc).toBe(regulamin.zawartosc)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
