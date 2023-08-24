const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 5,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  meals: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meals'
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', userSchema)