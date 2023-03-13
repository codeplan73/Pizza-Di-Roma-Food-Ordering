const express = require('express');
const router  = express.Router()
const { createMeal, getAllMeals, getMeal, updateMeal, deleteMeal } = require('../controller/MealController');
const { authenticateUser, authorizePermissions } = require('./../middleware/authentication')

router
    .route('/')
    .post([authenticateUser, authorizePermissions('admin')], createMeal)
    .get(getAllMeals);

router
    .route('/:id')
    .get(getMeal)
    .patch([authenticateUser, authorizePermissions('admin')], updateMeal)
    .delete([authenticateUser, authorizePermissions('admin')], deleteMeal);


module.exports = router;