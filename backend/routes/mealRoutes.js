const router = require('express').Router();
const mealController = require('../controllers/meal');
const meal = require('../models/meal');

// TODO: Use User's authentication
router.post('/create', mealController.logMeal);
router.get('/getMine', mealController.getMyMeals);
router.get('/mealLocations', mealController.getMealLocations);
router.post('/filterDateRange', mealController.getDurationMeals);
router.get('/:mealId', mealController.getMeal)
router.delete('/:mealId', mealController.removeMeal);

module.exports = router;