import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ZgloszeniaDoLoterii, { schema } from './model'

const router = new Router()
const { id_uzytkowni, a id_loterii, zakceptowany } = schema.tree

/**
 * @api {post} /zgloszenia_do_loterii Create zgloszenia do loterii
 * @apiName CreateZgloszeniaDoLoterii
 * @apiGroup ZgloszeniaDoLoterii
 * @apiParam id_uzytkowni Zgloszenia do loterii's id_uzytkowni.
 * @apiParam a id_loterii Zgloszenia do loterii's a id_loterii.
 * @apiParam zakceptowany Zgloszenia do loterii's zakceptowany.
 * @apiSuccess {Object} zgloszeniaDoLoterii Zgloszenia do loterii's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Zgloszenia do loterii not found.
 */
router.post('/',
  body({ id_uzytkowni, a id_loterii, zakceptowany }),
  create)

/**
 * @api {get} /zgloszenia_do_loterii Retrieve zgloszenia do loteriis
 * @apiName RetrieveZgloszeniaDoLoteriis
 * @apiGroup ZgloszeniaDoLoterii
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of zgloszenia do loteriis.
 * @apiSuccess {Object[]} rows List of zgloszenia do loteriis.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /zgloszenia_do_loterii/:id Retrieve zgloszenia do loterii
 * @apiName RetrieveZgloszeniaDoLoterii
 * @apiGroup ZgloszeniaDoLoterii
 * @apiSuccess {Object} zgloszeniaDoLoterii Zgloszenia do loterii's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Zgloszenia do loterii not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /zgloszenia_do_loterii/:id Update zgloszenia do loterii
 * @apiName UpdateZgloszeniaDoLoterii
 * @apiGroup ZgloszeniaDoLoterii
 * @apiParam id_uzytkowni Zgloszenia do loterii's id_uzytkowni.
 * @apiParam a id_loterii Zgloszenia do loterii's a id_loterii.
 * @apiParam zakceptowany Zgloszenia do loterii's zakceptowany.
 * @apiSuccess {Object} zgloszeniaDoLoterii Zgloszenia do loterii's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Zgloszenia do loterii not found.
 */
router.put('/:id',
  body({ id_uzytkowni, a id_loterii, zakceptowany }),
  update)

/**
 * @api {delete} /zgloszenia_do_loterii/:id Delete zgloszenia do loterii
 * @apiName DeleteZgloszeniaDoLoterii
 * @apiGroup ZgloszeniaDoLoterii
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Zgloszenia do loterii not found.
 */
router.delete('/:id',
  destroy)

export default router
