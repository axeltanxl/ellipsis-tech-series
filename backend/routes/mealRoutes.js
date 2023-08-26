const router = require('express').Router();
const mealController = require('../controllers/meal');
const meal = require('../models/meal');
const {authenticateToken} = require('../utils/middleware');

// TODO: Use User's authentication
router.post('/create', authenticateToken, mealController.logMeal);
router.get('/getMine', authenticateToken, mealController.getMyMeals);
router.get('/mealLocations', authenticateToken, mealController.getMealLocations);
router.post('/filterDateRange', authenticateToken, mealController.getDurationMeals);
router.get('/:mealId', authenticateToken, mealController.getMeal)
router.delete('/:mealId', authenticateToken, mealController.removeMeal);

module.exports = router;