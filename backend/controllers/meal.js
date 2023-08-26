const Meal = require('../models/meal');
const config = require('../utils/config');
const moment = require('moment-timezone');
const mongoose = require('mongoose');

// For a user to create a meal
const logMeal = async (req, res, next) => {
  try {
    const { food, sodiumAmount, mealType, description } = req.body;

    const userId = req.user.user_id;
    console.log(req.user);

    // Get time
    const time = moment.tz('Asia/Singapore');

    let newMeal;
    // Get information on location
    if (description === 'RESTAURANT' || description === 'TAKEAWAY') {
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const address = req.body.address;
      newMeal = new Meal({
        food: food,
        userId: userId,
        time: time,
        sodiumAmount: sodiumAmount,
        mealType: mealType,
        description: description,
        location: {
          longitude: longitude,
          latitude: latitude,
          address: address
        }
      })
    } else {
      newMeal = new Meal({
        food: food,
        userId: userId,
        time: time,
        sodiumAmount: sodiumAmount,
        mealType: mealType,
        description: description
      })
    }
    await newMeal.save();
    return res.status(200).json({ message: 'SUCCESS', data: newMeal });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ error: err });
  }

};

// For a user to look at all their meals in flip-chronological order
const getMyMeals = async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    const myMeals = await Meal.find({ userId: userId }).sort({ time: -1 });

    return res.status(200).json({ message: 'SUCCESS', data: myMeals });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ error: err });
  }
}

// For a user to look at one specific meal by ID
const getMeal = async (req, res, next) => {
  try {
    const mealId = new mongoose.Types.ObjectId(req.params.mealId);
    const meal = await Meal.findById({ _id: mealId });
    return res.status(200).json({ message: 'SUCCESS', data: meal });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ error: err });
  }
}

// For a user to look at all the meals in that duration
const getDurationMeals = async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    const thisDurationMeals = await Meal.find({
      userId: userId,
      time: { $gte: startDate, $lte: endDate }
    });
    return res.status(200).json({ message: 'Success', data: thisDurationMeals });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ error: err });
  }

}

// For a user to delete a meal (if they keyed wrongly)
const removeMeal = async (req, res, next) => {
  try {
    const mealId = new mongoose.Types.ObjectId(req.params.mealId);
    const toRemove = await Meal.findByIdAndRemove({ id: mealId });
    return res.json(203)
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ error: err });
  }
}

// For a user to find all the meals that are not home-cooked (essentially bought from somewhere) 
const getMealLocations = async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    const meals = await Meal.find({
      userId: userId,
      description: {
        $regex: new RegExp(`(RESTAURANT|TAKEAWAY)`),
      },
    });
    return res.status(200).json({message: 'SUCCESS', data: meals});
  } catch (err) {
    // console.log(err);
    return res.status(500).json({error: err});
  }
}

// Exports
module.exports = {
  logMeal,
  getMyMeals,
  getMeal,
  getDurationMeals,
  getMealLocations,
  removeMeal
}