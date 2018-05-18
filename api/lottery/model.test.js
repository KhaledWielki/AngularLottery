import { Lottery } from '.'

let lottery

beforeEach(async () => {
  lottery = await Lottery.create({ data: 'test', tresc: 'test', tytul: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = lottery.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(lottery.id)
    expect(view.data).toBe(lottery.data)
    expect(view.tresc).toBe(lottery.tresc)
    expect(view.tytul).toBe(lottery.tytul)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = lottery.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(lottery.id)
    expect(view.data).toBe(lottery.data)
    expect(view.tresc).toBe(lottery.tresc)
    expect(view.tytul).toBe(lottery.tytul)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
