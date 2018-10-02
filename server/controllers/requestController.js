const db  = require('../models')

exports.requestPosters = async (req, res) => {
  try {
    const posters = await db.Poster.find()
    
    res.send({ posters })
    
  } catch (error) {
    console.log('Request Posters Error: ', error)
  }
}