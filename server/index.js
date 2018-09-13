const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'dist')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

app.use(bodyParser.json());
app.use(cors())
app.use(express.static(publicPath))

app.use('/api/auth', authRoutes)
app.use('/api/upload', uploadRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}` ))