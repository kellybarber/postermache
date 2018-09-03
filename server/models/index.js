const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/postermache')

module.exports.User = require('./user')