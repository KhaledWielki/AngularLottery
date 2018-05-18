import { success, notFound } from '../../services/response/'
import { Lottery } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Lottery.create(body)
    .then((lottery) => lottery.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Lottery.count(query)
    .then(count => Lottery.find(query, select, cursor)
      .then((lotteries) => ({
        count,
        rows: lotteries.map((lottery) => lottery.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Lottery.findById(params.id)
    .then(notFound(res))
    .then((lottery) => lottery ? lottery.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Lottery.findById(params.id)
    .then(notFound(res))
    .then((lottery) => lottery ? Object.assign(lottery, body).save() : null)
    .then((lottery) => lottery ? lottery.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Lottery.findById(params.id)
    .then(notFound(res))
    .then((lottery) => lottery ? lottery.remove() : null)
    .then(success(res, 204))
    .catch(next)
