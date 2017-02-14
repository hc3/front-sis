const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('./app');
const request = supertest(app);

const routes = require('./modules/Cat/routes.config.js');
const MODULES_PATH = __dirname+'/modules'
const modules = require('./_config/module/get.modules.js')(MODULES_PATH)
const getRoutes = require('./_config/routes/get.routes')

console.log(modules
.map(getRoutes));

 describe('Route GET /cats', () => {
    it('should return a list of cats', done => {
	  	request
	  		.get('/api/cats')
	  		.end((err,res) => {
	  			expect(res.body).to.be.instanceof(Array);
	  			done(err);
	  		})
    });
});
