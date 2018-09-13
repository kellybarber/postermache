const router = require('express').Router()

const { verifyUser } = require('../middleware/auth')
const { uploadPoster } = require('../controllers/uploadController')

router.post('/poster', verifyUser, uploadPoster)

module.exports = router