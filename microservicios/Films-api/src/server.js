const morgan = require("morgan")
const express= require("express")
const server= express()


server.use(morgan('dev'))
server.use(express.json())
server.use(require('./routes'))

module.exports=server