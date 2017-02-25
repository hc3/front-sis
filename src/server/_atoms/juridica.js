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
    default:''
}

const nome_fantasia = {
    ATOM_NAME:'nome_fantasia',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
    default:''
}

const cnpj = {
    ATOM_NAME:'cnpj',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
    default:''
}

const ie = {
    ATOM_NAME:'ie',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
    default:''
}

const PROPS = {
  razao_social,
  nome_fantasia,
  cnpj,
  ie,
  type:Object
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)