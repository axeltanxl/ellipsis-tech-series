const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const MEAL_TYPE = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACK'];

const mealSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  sodiumAmount: {
    type: Number,
    required: true
  },
  sugarAmount: {
    type: Number,
    required: true
  },
  mealType: {
    type: String,
    enum: MEAL_TYPE
  },
})

mealSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Meal', mealSchema)