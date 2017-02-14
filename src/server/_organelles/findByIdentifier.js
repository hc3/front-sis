module.exports = (Organism) => 
  (req, res) => {
    
    const identifier = (`${req.params.id}`.length > 20) ? "_id" : "codeInterno"
    const query = {[identifier]: req.params.id}
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    
    return Organism.findOne(query)
                    .exec()
                    .then(success)
                    .catch(error)
  }

