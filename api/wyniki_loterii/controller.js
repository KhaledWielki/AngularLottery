import { success, notFound } from '../../services/response/'
import { WynikiLoterii } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WynikiLoterii.create(body)
    .then((wynikiLoterii) => wynikiLoterii.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  WynikiLoterii.count(query)
    .then(count => WynikiLoterii.find(query, select, cursor)
      .then((wynikiLoteriis) => ({
        count,
        rows: wynikiLoteriis.map((wynikiLoterii) => wynikiLoterii.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WynikiLoterii.findById(params.id)
    .then(notFound(res))
    .then((wynikiLoterii) => wynikiLoterii ? wynikiLoterii.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WynikiLoterii.findById(params.id)
    .then(notFound(res))
    .then((wynikiLoterii) => wynikiLoterii ? Object.assign(wynikiLoterii, body).save() : null)
    .then((wynikiLoterii) => wynikiLoterii ? wynikiLoterii.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WynikiLoterii.findById(params.id)
    .then(notFound(res))
    .then((wynikiLoterii) => wynikiLoterii ? wynikiLoterii.remove() : null)
    .then(success(res, 204))
    .catch(next)
