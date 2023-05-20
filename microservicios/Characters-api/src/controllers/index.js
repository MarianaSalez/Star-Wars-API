const {catchedAsync}=require('../utils')

module.exports={
    getChar: catchedAsync(require('./getChar')),
    createChar: catchedAsync(require('./createChar')) 
}