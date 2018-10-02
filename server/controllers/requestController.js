const db  = require('../models')

exports.requestPosters = async (req, res) => {
  try {
    console.log('Request Posters')
    
    res.send({ Here: 'Dem Posters' })
    
  } catch (error) {
    console.log('Request Posters Error: ', error)
  }
}