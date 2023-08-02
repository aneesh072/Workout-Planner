const express = require('express');

const {
  createWorkout,
  getWorkouts,
} = require('../controller/workoutController');

const router = express.Router();

//Get all workouts
router.get('/', getWorkouts);

//Create a new workout
router.post('/', createWorkout);

module.exports = router;
