import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WynikiLoterii, { schema } from './model'

const router = new Router()
const { id_loterii, id_uzytkownika, id_miejsca } = schema.tree

/**
 * @api {post} /wyniki_loterii Create wyniki loterii
 * @apiName CreateWynikiLoterii
 * @apiGroup WynikiLoterii
 * @apiParam id_loterii Wyniki loterii's id_loterii.
 * @apiParam id_uzytkownika Wyniki loterii's id_uzytkownika.
 * @apiParam id_miejsca Wyniki loterii's id_miejsca.
 * @apiSuccess {Object} wynikiLoterii Wyniki loterii's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wyniki loterii not found.
 */
router.post('/',
  body({ id_loterii, id_uzytkownika, id_miejsca }),
  create)

/**
 * @api {get} /wyniki_loterii Retrieve wyniki loteriis
 * @apiName RetrieveWynikiLoteriis
 * @apiGroup WynikiLoterii
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of wyniki loteriis.
 * @apiSuccess {Object[]} rows List of wyniki loteriis.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /wyniki_loterii/:id Retrieve wyniki loterii
 * @apiName RetrieveWynikiLoterii
 * @apiGroup WynikiLoterii
 * @apiSuccess {Object} wynikiLoterii Wyniki loterii's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wyniki loterii not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /wyniki_loterii/:id Update wyniki loterii
 * @apiName UpdateWynikiLoterii
 * @apiGroup WynikiLoterii
 * @apiParam id_loterii Wyniki loterii's id_loterii.
 * @apiParam id_uzytkownika Wyniki loterii's id_uzytkownika.
 * @apiParam id_miejsca Wyniki loterii's id_miejsca.
 * @apiSuccess {Object} wynikiLoterii Wyniki loterii's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wyniki loterii not found.
 */
router.put('/:id',
  body({ id_loterii, id_uzytkownika, id_miejsca }),
  update)

/**
 * @api {delete} /wyniki_loterii/:id Delete wyniki loterii
 * @apiName DeleteWynikiLoterii
 * @apiGroup WynikiLoterii
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Wyniki loterii not found.
 */
router.delete('/:id',
  destroy)

export default router
