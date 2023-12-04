const ProverbeController = require('../Controllers/ProverbesControllers')
const router = require('express').Router()

router.get('/', ProverbeController.getAllProverbes),
router.post('/addproverb', ProverbeController.PostProverbe),
router.get('/getOneProverbe/:id', ProverbeController.getOneProduct)
router.get('/search/:key', ProverbeController.SearchProduct)

module.exports= router