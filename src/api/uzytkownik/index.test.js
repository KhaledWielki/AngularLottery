import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Uzytkownik } from '.'

const app = () => express(apiRoot, routes)

let uzytkownik

beforeEach(async () => {
  uzytkownik = await Uzytkownik.create({})
})

test('POST /uzytkownik 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ imie: 'test', nazwisko: 'test', haslo: 'test', email: 'test', usuniety: 'test', rola: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.imie).toEqual('test')
  expect(body.nazwisko).toEqual('test')
  expect(body.haslo).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.usuniety).toEqual('test')
  expect(body.rola).toEqual('test')
})

test('GET /uzytkownik 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /uzytkownik/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${uzytkownik.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(uzytkownik.id)
})

test('GET /uzytkownik/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /uzytkownik/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${uzytkownik.id}`)
    .send({ imie: 'test', nazwisko: 'test', haslo: 'test', email: 'test', usuniety: 'test', rola: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(uzytkownik.id)
  expect(body.imie).toEqual('test')
  expect(body.nazwisko).toEqual('test')
  expect(body.haslo).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.usuniety).toEqual('test')
  expect(body.rola).toEqual('test')
})

test('PUT /uzytkownik/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ imie: 'test', nazwisko: 'test', haslo: 'test', email: 'test', usuniety: 'test', rola: 'test' })
  expect(status).toBe(404)
})

test('DELETE /uzytkownik/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${uzytkownik.id}`)
  expect(status).toBe(204)
})

test('DELETE /uzytkownik/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
