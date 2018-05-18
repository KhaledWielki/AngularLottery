import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Lottery, { schema } from './model'

const router = new Router()
const { data, tresc, tytul } = schema.tree

/**
 * @api {post} /powiadomienie Create lottery
 * @apiName CreateLottery
 * @apiGroup Lottery
 * @apiParam data Lottery's data.
 * @apiParam tresc Lottery's tresc.
 * @apiParam tytul Lottery's tytul.
 * @apiSuccess {Object} lottery Lottery's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lottery not found.
 */
router.post('/',
  body({ data, tresc, tytul }),
  create)

/**
 * @api {get} /powiadomienie Retrieve lotteries
 * @apiName RetrieveLotteries
 * @apiGroup Lottery
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of lotteries.
 * @apiSuccess {Object[]} rows List of lotteries.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /powiadomienie/:id Retrieve lottery
 * @apiName RetrieveLottery
 * @apiGroup Lottery
 * @apiSuccess {Object} lottery Lottery's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lottery not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /powiadomienie/:id Update lottery
 * @apiName UpdateLottery
 * @apiGroup Lottery
 * @apiParam data Lottery's data.
 * @apiParam tresc Lottery's tresc.
 * @apiParam tytul Lottery's tytul.
 * @apiSuccess {Object} lottery Lottery's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lottery not found.
 */
router.put('/:id',
  body({ data, tresc, tytul }),
  update)

/**
 * @api {delete} /powiadomienie/:id Delete lottery
 * @apiName DeleteLottery
 * @apiGroup Lottery
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lottery not found.
 */
router.delete('/:id',
  destroy)

export default router
