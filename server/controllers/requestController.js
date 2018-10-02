const db  = require('../models')

exports.requestPosters = async (req, res) => {
  try {
    
    
    res.send({ Here: 'Dem Posters' })
    
  } catch (error) {
    console.log('Request Posters Error: ', error)
  }
}