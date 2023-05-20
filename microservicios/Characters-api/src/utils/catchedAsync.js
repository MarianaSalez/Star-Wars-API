module.exports=(fn)=>{
    return function(req,res, next){
        fn(req,res).catch((err)=>{
            //saltea al manejador de errores
            next(err)
            
        })
    }
}