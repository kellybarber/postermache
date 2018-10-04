const mongoose = require('mongoose')

const PosterSchema = new mongoose.Schema({
  url: { type: String },
  address: { type: String },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  },
  startDate: { type: Date },
  endDate: { type: Date },
  uploadDate: { type: Date }
})

module.exports = mongoose.model('Poster', PosterSchema)