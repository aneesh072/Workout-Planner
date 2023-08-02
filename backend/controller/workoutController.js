const Workout = require('../model/workoutModel');
const mongoose = require('mongoose');

//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//create a workout
const createWorkout = async (req, res) => {
  const { title, load, sets, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }

  if (!load) {
    emptyFields.push('load');
  }

  if (!sets) {
    emptyFields.push('sets');
  }

  if (!reps) {
    emptyFields.push('reps');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill all the fields', emptyFields });
  }

  try {
    const workout = await Workout.create({ title, load, sets, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
};
