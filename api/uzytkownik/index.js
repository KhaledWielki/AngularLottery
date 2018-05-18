import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Uzytkownik, { schema } from './model'

const router = new Router()
const { imie, nazwisko, haslo, email, usuniety, rola } = schema.tree

/**
 * @api {post} /uzytkownik Create uzytkownik
 * @apiName CreateUzytkownik
 * @apiGroup Uzytkownik
 * @apiParam imie Uzytkownik's imie.
 * @apiParam nazwisko Uzytkownik's nazwisko.
 * @apiParam haslo Uzytkownik's haslo.
 * @apiParam email Uzytkownik's email.
 * @apiParam usuniety Uzytkownik's usuniety.
 * @apiParam rola Uzytkownik's rola.
 * @apiSuccess {Object} uzytkownik Uzytkownik's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Uzytkownik not found.
 */
router.post('/',
  body({ imie, nazwisko, haslo, email, usuniety, rola }),
  create)

/**
 * @api {get} /uzytkownik Retrieve uzytkowniks
 * @apiName RetrieveUzytkowniks
 * @apiGroup Uzytkownik
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of uzytkowniks.
 * @apiSuccess {Object[]} rows List of uzytkowniks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /uzytkownik/:id Retrieve uzytkownik
 * @apiName RetrieveUzytkownik
 * @apiGroup Uzytkownik
 * @apiSuccess {Object} uzytkownik Uzytkownik's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Uzytkownik not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /uzytkownik/:id Update uzytkownik
 * @apiName UpdateUzytkownik
 * @apiGroup Uzytkownik
 * @apiParam imie Uzytkownik's imie.
 * @apiParam nazwisko Uzytkownik's nazwisko.
 * @apiParam haslo Uzytkownik's haslo.
 * @apiParam email Uzytkownik's email.
 * @apiParam usuniety Uzytkownik's usuniety.
 * @apiParam rola Uzytkownik's rola.
 * @apiSuccess {Object} uzytkownik Uzytkownik's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Uzytkownik not found.
 */
router.put('/:id',
  body({ imie, nazwisko, haslo, email, usuniety, rola }),
  update)

/**
 * @api {delete} /uzytkownik/:id Delete uzytkownik
 * @apiName DeleteUzytkownik
 * @apiGroup Uzytkownik
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Uzytkownik not found.
 */
router.delete('/:id',
  destroy)

export default router
