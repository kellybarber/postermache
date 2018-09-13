const db  = require('../models')
const jwt = require('jsonwebtoken')

exports.verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const { userId } = jwt.verify(token, process.env.SECRET_KEY);

    let user = await db.User.findOne({ _id: userId })
    if (!user) throw 'You are not verified to view this content'

    console.log('user: ', user)

    req.user = user
    next()

  } catch (error) {
    console.log('Verification error: ', error);
    res.status(401).send({ message: 'Verification failed!' });
  }
}