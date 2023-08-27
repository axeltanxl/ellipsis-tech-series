const Meal = require('../models/meal');
const config = require('../utils/config');
const moment = require('moment-timezone');
const mongoose = require('mongoose');

// For a user to create a meal
const logMeal = async (req, res, next) => {
  try {
    const { food, sodiumAmount, sugarAmount, mealType } = req.body;
    const userId = req.user.id;

    // Get time
    const time = moment.tz('Asia/Singapore');

    const newMeal = new Meal({
      food: food,
      userId: userId,
      time: time,
      sodiumAmount: sodiumAmount,
      sugarAmount: sugarAmount,
      mealType: mealType
    })

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
    const userId = req.user.id;
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
    const userId = req.user.id;
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


// Get current sodium intake level for a user for the day
const getCurrentNutrientsIntake = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const startDate = new Date();
    // Set the time to the start of the day
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    // Set the time to the end of the day
    endDate.setHours(23, 59, 59, 999);

    const thisDurationMeals = await Meal.find({
      userId: userId,
      time: { $gte: startDate, $lte: endDate }
    });

    // Get the sodium and sugar amount for each meal the user has taken for the day
    let sodiumIntake = 0;
    let sugarIntake = 0;
    for (let i = 0; i < thisDurationMeals.length; i++){
      sodiumIntake += thisDurationMeals[i].sodiumAmount;
      sugarIntake += thisDurationMeals[i].sugarAmount;
    }

    return res.status(200).json({ message: "Successfully retrieved current sodium intake for user.", data: { sodiumIntake, sugarIntake } });
  } catch (err) {
    console.error(err);
  }
}

// Exports
module.exports = {
  logMeal,
  getMyMeals,
  getMeal,
  getDurationMeals,
  removeMeal,
  getCurrentNutrientsIntake
}