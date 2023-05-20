const { Router } = require("express")
const controllers= require('../controllers')

const router= Router()

router.get('/', controllers.getChar)
router.post('/', controllers.createChar)

module.exports= router