import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Miejsca, { schema } from './model'

const router = new Router()
const { nr_miejsca, wolne } = schema.tree

/**
 * @api {post} /miejsca Create miejsca
 * @apiName CreateMiejsca
 * @apiGroup Miejsca
 * @apiParam nr_miejsca Miejsca's nr_miejsca.
 * @apiParam wolne Miejsca's wolne.
 * @apiSuccess {Object} miejsca Miejsca's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Miejsca not found.
 */
router.post('/',
  body({ nr_miejsca, wolne }),
  create)

/**
 * @api {get} /miejsca Retrieve miejscas
 * @apiName RetrieveMiejscas
 * @apiGroup Miejsca
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of miejscas.
 * @apiSuccess {Object[]} rows List of miejscas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /miejsca/:id Retrieve miejsca
 * @apiName RetrieveMiejsca
 * @apiGroup Miejsca
 * @apiSuccess {Object} miejsca Miejsca's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Miejsca not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /miejsca/:id Update miejsca
 * @apiName UpdateMiejsca
 * @apiGroup Miejsca
 * @apiParam nr_miejsca Miejsca's nr_miejsca.
 * @apiParam wolne Miejsca's wolne.
 * @apiSuccess {Object} miejsca Miejsca's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Miejsca not found.
 */
router.put('/:id',
  body({ nr_miejsca, wolne }),
  update)

/**
 * @api {delete} /miejsca/:id Delete miejsca
 * @apiName DeleteMiejsca
 * @apiGroup Miejsca
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Miejsca not found.
 */
router.delete('/:id',
  destroy)

export default router
