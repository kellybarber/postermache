const db  = require('../models')
const cloudinary = require('cloudinary')
const Datauri = require('datauri')

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.uploadPoster = async (req, res) => {
  try {
    if (req.file === undefined) throw 'You must include an image'

    const { buffer, mimetype } = req.file
    const { address, lat, lng, startDate, endDate } = JSON.parse(req.body.details)  

    if (!address || !lng || !lat) throw 'You must provide a valid address'
    if (!startDate || !endDate) throw 'You must provide all requested information'

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
    
    res.send(poster)

  } catch (error) {
    res.status(422).send({ error })
    console.log('Upload Poster Error', error)
  }
}