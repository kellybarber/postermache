const router = require('express').Router()
const multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

const { verifyUser } = require('../middleware/auth')
const { uploadPoster } = require('../controllers/uploadController')

router.post('/poster', verifyUser, upload.single('file'), uploadPoster)

module.exports = router