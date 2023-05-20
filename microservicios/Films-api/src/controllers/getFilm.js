const films= require('../data')

module.exports=async (req, res)=>{
    const film= await films.list()
    res.status(200).json(film)
}