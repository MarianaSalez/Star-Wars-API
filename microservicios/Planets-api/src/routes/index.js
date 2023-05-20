const controller=require('../controllers')

const {Router}=require('express')

const routes =Router()

routes.get('/', controller.getPlanets)
routes.post('/', controller.createPlanet)

module.exports=routes