const mongoose = require('mongoose')
const config = require('config')

module.exports = function createMongoDb(){
    mongoose.connect(config.get('mongoUrl')).then(result=>{console.log("Connected")}).catch(err=> console.log(err))
}