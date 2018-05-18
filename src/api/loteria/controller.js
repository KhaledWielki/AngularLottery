import { success, notFound } from '../../services/response/'
import { Loteria } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Loteria.create(body)
    .then((loteria) => loteria.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Loteria.count(query)
    .then(count => Loteria.find(query, select, cursor)
      .then((loterias) => ({
        count,
        rows: loterias.map((loteria) => loteria.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Loteria.findById(params.id)
    .then(notFound(res))
    .then((loteria) => loteria ? loteria.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Loteria.findById(params.id)
    .then(notFound(res))
    .then((loteria) => loteria ? Object.assign(loteria, body).save() : null)
    .then((loteria) => loteria ? loteria.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Loteria.findById(params.id)
    .then(notFound(res))
    .then((loteria) => loteria ? loteria.remove() : null)
    .then(success(res, 204))
    .catch(next)
