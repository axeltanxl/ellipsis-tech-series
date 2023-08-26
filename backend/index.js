const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const mealRouter = require('./routes/mealRoutes')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/meals', mealRouter)

app.get('/', (req, res) => {
    res.send("Base Connection Successful");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})