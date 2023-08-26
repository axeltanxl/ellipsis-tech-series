const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const MEAL_TYPE = ['BREAKFAST', 'BRUNCH', 'LUNCH', 'TEA', 'DINNER', 'SUPPER', 'SNACK', 'DESSERT'];
const PREPARATION_TYPE = ['HOME-COOKED', 'RESTAURANT', 'TAKEAWAY'];

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
  mealType: {
    type: String,
    enum: MEAL_TYPE
  },
  description: {
    type: String,
    enum: PREPARATION_TYPE
  },
  location: {
    longitude: {
      type: String
    },
    latitude: {
      type: String
    }, 
    address: {
      type: String
    }
  }
})

mealSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Meal', mealSchema)