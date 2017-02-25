const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  COMPOSE: true,
  ARRAY: false
}

const razao_social = {
    ATOM_NAME:'razao_social',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const nome_fantasia = {
    ATOM_NAME:'nome_fantasia',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const cnpj = {
    ATOM_NAME:'cnpj',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const ie = {
    ATOM_NAME:'ie',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const PROPS = {
  razao_social,
  nome_fantasia,
  cnpj,
  ie
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)