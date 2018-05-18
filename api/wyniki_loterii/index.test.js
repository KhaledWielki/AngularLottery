import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { WynikiLoterii } from '.'

const app = () => express(apiRoot, routes)

let wynikiLoterii

beforeEach(async () => {
  wynikiLoterii = await WynikiLoterii.create({})
})

test('POST /wyniki_loterii 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id_loterii: 'test', id_uzytkownika: 'test', id_miejsca: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id_loterii).toEqual('test')
  expect(body.id_uzytkownika).toEqual('test')
  expect(body.id_miejsca).toEqual('test')
})

test('GET /wyniki_loterii 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /wyniki_loterii/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${wynikiLoterii.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(wynikiLoterii.id)
})

test('GET /wyniki_loterii/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /wyniki_loterii/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${wynikiLoterii.id}`)
    .send({ id_loterii: 'test', id_uzytkownika: 'test', id_miejsca: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(wynikiLoterii.id)
  expect(body.id_loterii).toEqual('test')
  expect(body.id_uzytkownika).toEqual('test')
  expect(body.id_miejsca).toEqual('test')
})

test('PUT /wyniki_loterii/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ id_loterii: 'test', id_uzytkownika: 'test', id_miejsca: 'test' })
  expect(status).toBe(404)
})

test('DELETE /wyniki_loterii/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${wynikiLoterii.id}`)
  expect(status).toBe(204)
})

test('DELETE /wyniki_loterii/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
