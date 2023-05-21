class ClientError extends Error{
    constructor(message, statusCod=400){
        super(message)
        this.statusCode=statusCode
    }
}

module.exports={
    ClientError
}