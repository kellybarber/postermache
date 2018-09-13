const db  = require('../models')

exports.uploadPoster = async (req, res) => {
  try {
    console.log('Upload Poster Controller')
    

    res.send({ 'Hello': 'Baby' })
  } catch {
    console.log('Upload Poster Error', error)
    
  }
}