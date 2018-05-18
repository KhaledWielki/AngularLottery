import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Loteria, { schema } from './model'

const router = new Router()
const { nazwa, data } = schema.tree

/**
 * @api {post} /loteria Create loteria
 * @apiName CreateLoteria
 * @apiGroup Loteria
 * @apiParam nazwa Loteria's nazwa.
 * @apiParam data Loteria's data.
 * @apiSuccess {Object} loteria Loteria's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Loteria not found.
 */
router.post('/',
  body({ nazwa, data }),
  create)

/**
 * @api {get} /loteria Retrieve loterias
 * @apiName RetrieveLoterias
 * @apiGroup Loteria
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of loterias.
 * @apiSuccess {Object[]} rows List of loterias.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /loteria/:id Retrieve loteria
 * @apiName RetrieveLoteria
 * @apiGroup Loteria
 * @apiSuccess {Object} loteria Loteria's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Loteria not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /loteria/:id Update loteria
 * @apiName UpdateLoteria
 * @apiGroup Loteria
 * @apiParam nazwa Loteria's nazwa.
 * @apiParam data Loteria's data.
 * @apiSuccess {Object} loteria Loteria's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Loteria not found.
 */
router.put('/:id',
  body({ nazwa, data }),
  update)

/**
 * @api {delete} /loteria/:id Delete loteria
 * @apiName DeleteLoteria
 * @apiGroup Loteria
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Loteria not found.
 */
router.delete('/:id',
  destroy)

export default router
