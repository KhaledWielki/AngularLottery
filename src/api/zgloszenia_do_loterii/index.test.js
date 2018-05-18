import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ZgloszeniaDoLoterii } from '.'

const app = () => express(apiRoot, routes)

let zgloszeniaDoLoterii

beforeEach(async () => {
  zgloszeniaDoLoterii = await ZgloszeniaDoLoterii.create({})
})

test('POST /zgloszenia_do_loterii 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id_uzytkowni: 'test', a id_loterii: 'test', zakceptowany: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id_uzytkowni).toEqual('test')
  expect(body.a id_loterii).toEqual('test')
  expect(body.zakceptowany).toEqual('test')
})

test('GET /zgloszenia_do_loterii 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /zgloszenia_do_loterii/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${zgloszeniaDoLoterii.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(zgloszeniaDoLoterii.id)
})

test('GET /zgloszenia_do_loterii/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /zgloszenia_do_loterii/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${zgloszeniaDoLoterii.id}`)
    .send({ id_uzytkowni: 'test', a id_loterii: 'test', zakceptowany: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(zgloszeniaDoLoterii.id)
  expect(body.id_uzytkowni).toEqual('test')
  expect(body.a id_loterii).toEqual('test')
  expect(body.zakceptowany).toEqual('test')
})

test('PUT /zgloszenia_do_loterii/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ id_uzytkowni: 'test', a id_loterii: 'test', zakceptowany: 'test' })
  expect(status).toBe(404)
})

test('DELETE /zgloszenia_do_loterii/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${zgloszeniaDoLoterii.id}`)
  expect(status).toBe(204)
})

test('DELETE /zgloszenia_do_loterii/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
