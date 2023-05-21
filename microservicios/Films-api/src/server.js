const morgan = require("morgan")
const express= require("express")
const server= express()


server.use(morgan('dev'))
server.use(express.json())
server.use('/films', require('./routes'))

//sobre escribo el mandejador de errores de express
server.use((err,req,res,next)=>{
    res.status(err.statusCode|| 500).send({
        error:true,
        message: err.message})
})


module.exports=server