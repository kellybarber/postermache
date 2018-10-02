const router = require('express').Router()

const { verifyUser } = require('../middleware/auth')
const { requestPosters } = require('../controllers/requestController')

router.get('/posters', verifyUser, requestPosters)

module.exports = router