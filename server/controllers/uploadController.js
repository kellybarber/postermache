const db  = require('../models')
const cloudinary = require('cloudinary')
const Datauri = require('datauri')

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.uploadPoster = async (req, res, next) => {
  try {
    const { buffer, mimetype } = req.file
    const { address, lat, lng, startDate, endDate } = JSON.parse(req.body.details)    

    const dataUri = new Datauri()
    dataUri.format(mimetype, buffer)

    const upload = await cloudinary.v2.uploader.upload(dataUri.content)

    const poster = await db.Poster.create({
      url: upload.secure_url,
      address,
      location: {
        type: 'Point',
        coordinates: [ lng, lat ]
      }, 
      startDate,
      endDate
    })

    console.log(poster)
    

    res.send({ 'Hello': 'Baby' })
  } catch {
    console.log('Upload Poster Error', error)
  }
}