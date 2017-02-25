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

const cpf = {
    ATOM_NAME:'cpf',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const rg = {
    ATOM_NAME:'rg',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const dt_nascimento = {
    ATOM_NAME:'dt_nascimento',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:Date,
}

const PROPS = {
  razao_social,
  cpf,
  rg,
  dt_nascimento,
  type:Object
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)