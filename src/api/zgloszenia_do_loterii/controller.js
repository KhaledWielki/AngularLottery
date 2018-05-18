import { success, notFound } from '../../services/response/'
import { ZgloszeniaDoLoterii } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ZgloszeniaDoLoterii.create(body)
    .then((zgloszeniaDoLoterii) => zgloszeniaDoLoterii.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ZgloszeniaDoLoterii.count(query)
    .then(count => ZgloszeniaDoLoterii.find(query, select, cursor)
      .then((zgloszeniaDoLoteriis) => ({
        count,
        rows: zgloszeniaDoLoteriis.map((zgloszeniaDoLoterii) => zgloszeniaDoLoterii.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ZgloszeniaDoLoterii.findById(params.id)
    .then(notFound(res))
    .then((zgloszeniaDoLoterii) => zgloszeniaDoLoterii ? zgloszeniaDoLoterii.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ZgloszeniaDoLoterii.findById(params.id)
    .then(notFound(res))
    .then((zgloszeniaDoLoterii) => zgloszeniaDoLoterii ? Object.assign(zgloszeniaDoLoterii, body).save() : null)
    .then((zgloszeniaDoLoterii) => zgloszeniaDoLoterii ? zgloszeniaDoLoterii.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ZgloszeniaDoLoterii.findById(params.id)
    .then(notFound(res))
    .then((zgloszeniaDoLoterii) => zgloszeniaDoLoterii ? zgloszeniaDoLoterii.remove() : null)
    .then(success(res, 204))
    .catch(next)
