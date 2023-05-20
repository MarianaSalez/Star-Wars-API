const { Router } = require("express")
const controllers= require('../controllers')

const router= Router()

router.get('/', controllers.getFilm)
router.post('/', controllers.createFilm)

module.exports= router