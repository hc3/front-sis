const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  COMPOSE: true,
  ARRAY: true
}

const cep = {
    ATOM_NAME:'cep',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const rua = {
    ATOM_NAME:'rua',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const numero = {
    ATOM_NAME:'numero',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const bairro = {
    ATOM_NAME:'bairro',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const pais = {
    ATOM_NAME:'pais',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const estado = {
    ATOM_NAME:'estado',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}

const cidade = {
    ATOM_NAME:'cidade',
    VALIDATE: false,
    COMPOSE: false,
    ARRAY: false,
    type:String,
}


const PROPS = {
    cep,
    rua,
    numero,
    bairro,
    pais,
    estado,
    cidade
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)