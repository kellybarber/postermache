const db  = require('../models')

exports.requestPosters = async (req, res) => {
  try {
    const posters = await db.Poster.find().sort({ uploadDate: -1 })
    
    res.send({ posters })

  } catch (error) {
    console.log('Request Posters Error: ', error)
  }
}