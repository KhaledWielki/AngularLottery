import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Loteria } from '.'

const app = () => express(apiRoot, routes)

let loteria

beforeEach(async () => {
  loteria = await Loteria.create({})
})

test('POST /loteria 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ nazwa: 'test', data: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.nazwa).toEqual('test')
  expect(body.data).toEqual('test')
})

test('GET /loteria 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /loteria/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${loteria.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(loteria.id)
})

test('GET /loteria/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /loteria/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${loteria.id}`)
    .send({ nazwa: 'test', data: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(loteria.id)
  expect(body.nazwa).toEqual('test')
  expect(body.data).toEqual('test')
})

test('PUT /loteria/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ nazwa: 'test', data: 'test' })
  expect(status).toBe(404)
})

test('DELETE /loteria/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${loteria.id}`)
  expect(status).toBe(204)
})

test('DELETE /loteria/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
