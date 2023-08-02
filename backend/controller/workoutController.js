const Workout = require('../model/workoutModel');

//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//create a workout
const createWorkout = async (req, res) => {
  const { day, title, load, sets, reps } = req.body;

  try {
    const workout = await Workout.create({ day, title, load, sets, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
};
