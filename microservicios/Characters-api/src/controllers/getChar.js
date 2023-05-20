const characters= require('../data')
const {response}=require('../utils')

module.exports=async (req, res)=>{
    const char= await characters.list()
    response(res,200,char)
}