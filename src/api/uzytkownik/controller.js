import { success, notFound } from '../../services/response/'
import { Uzytkownik } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Uzytkownik.create(body)
    .then((uzytkownik) => uzytkownik.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Uzytkownik.count(query)
    .then(count => Uzytkownik.find(query, select, cursor)
      .then((uzytkowniks) => ({
        count,
        rows: uzytkowniks.map((uzytkownik) => uzytkownik.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Uzytkownik.findById(params.id)
    .then(notFound(res))
    .then((uzytkownik) => uzytkownik ? uzytkownik.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Uzytkownik.findById(params.id)
    .then(notFound(res))
    .then((uzytkownik) => uzytkownik ? Object.assign(uzytkownik, body).save() : null)
    .then((uzytkownik) => uzytkownik ? uzytkownik.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Uzytkownik.findById(params.id)
    .then(notFound(res))
    .then((uzytkownik) => uzytkownik ? uzytkownik.remove() : null)
    .then(success(res, 204))
    .catch(next)
