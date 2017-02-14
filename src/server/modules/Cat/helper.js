const supertest = require('supertest');
const chai = require('chai');
const app = requiure(../../app.js);

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;