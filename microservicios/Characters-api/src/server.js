const morgan = require("morgan")

const express= require ('express')
const server= express()

server.use(morgan('dev'))
server.use(express.json())
server.use(require('./routes'))

//sobre escribo el mandejador de errores de express
server.use((err,req,res,next)=>{
    
})


module.exports= server
