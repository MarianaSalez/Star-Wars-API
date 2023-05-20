const planets=require('../data/index')

module.exports=(req, res)=>{
    res.status(200).json(planets)
}