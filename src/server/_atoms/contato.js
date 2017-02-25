const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  COMPOSE: true,
  //ARRAY: true
}

const telefone1 = {
    ATOM_NAME:'telefone1',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const telefone2 = {
    ATOM_NAME:'telefone2',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const email = {
    ATOM_NAME:'email',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const PROPS = {
    telefone1,
    telefone2,
    email,
    type:Object
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)