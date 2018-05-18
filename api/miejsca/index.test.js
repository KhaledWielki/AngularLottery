import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Miejsca } from '.'

const app = () => express(apiRoot, routes)

let miejsca

beforeEach(async () => {
  miejsca = await Miejsca.create({})
})

test('POST /miejsca 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ nr_miejsca: 'test', wolne: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.nr_miejsca).toEqual('test')
  expect(body.wolne).toEqual('test')
})

test('GET /miejsca 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /miejsca/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${miejsca.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(miejsca.id)
})

test('GET /miejsca/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /miejsca/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${miejsca.id}`)
    .send({ nr_miejsca: 'test', wolne: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(miejsca.id)
  expect(body.nr_miejsca).toEqual('test')
  expect(body.wolne).toEqual('test')
})

test('PUT /miejsca/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ nr_miejsca: 'test', wolne: 'test' })
  expect(status).toBe(404)
})

test('DELETE /miejsca/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${miejsca.id}`)
  expect(status).toBe(204)
})

test('DELETE /miejsca/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
