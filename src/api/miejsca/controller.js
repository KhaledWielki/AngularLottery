import { success, notFound } from '../../services/response/'
import { Miejsca } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Miejsca.create(body)
    .then((miejsca) => miejsca.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Miejsca.count(query)
    .then(count => Miejsca.find(query, select, cursor)
      .then((miejscas) => ({
        count,
        rows: miejscas.map((miejsca) => miejsca.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Miejsca.findById(params.id)
    .then(notFound(res))
    .then((miejsca) => miejsca ? miejsca.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Miejsca.findById(params.id)
    .then(notFound(res))
    .then((miejsca) => miejsca ? Object.assign(miejsca, body).save() : null)
    .then((miejsca) => miejsca ? miejsca.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Miejsca.findById(params.id)
    .then(notFound(res))
    .then((miejsca) => miejsca ? miejsca.remove() : null)
    .then(success(res, 204))
    .catch(next)
