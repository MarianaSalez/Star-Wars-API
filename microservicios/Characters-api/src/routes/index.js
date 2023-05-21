const { Router } = require("express")
const controllers= require('../controllers')
const middlewares=require('../middlewares')

const router= Router()

router.get('/', controllers.getChar)
router.post('/',middlewares.characterValidation, controllers.createChar)

module.exports= router