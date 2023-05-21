const planets=require('../data/index')

module.exports=async (req, res)=>{
    const planet= await planets.list()
    res.status(200).json(planet)
}