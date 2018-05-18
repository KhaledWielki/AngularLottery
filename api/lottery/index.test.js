import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Lottery } from '.'

const app = () => express(apiRoot, routes)

let lottery

beforeEach(async () => {
  lottery = await Lottery.create({})
})

test('POST /powiadomienie 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ data: 'test', tresc: 'test', tytul: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.data).toEqual('test')
  expect(body.tresc).toEqual('test')
  expect(body.tytul).toEqual('test')
})

test('GET /powiadomienie 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /powiadomienie/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${lottery.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(lottery.id)
})

test('GET /powiadomienie/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /powiadomienie/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${lottery.id}`)
    .send({ data: 'test', tresc: 'test', tytul: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(lottery.id)
  expect(body.data).toEqual('test')
  expect(body.tresc).toEqual('test')
  expect(body.tytul).toEqual('test')
})

test('PUT /powiadomienie/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ data: 'test', tresc: 'test', tytul: 'test' })
  expect(status).toBe(404)
})

test('DELETE /powiadomienie/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${lottery.id}`)
  expect(status).toBe(204)
})

test('DELETE /powiadomienie/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
