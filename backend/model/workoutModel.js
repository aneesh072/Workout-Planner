const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workooutSchema = new Schema(
  {
    day: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    load: {
      type: Number,
      required: true,
    },

    sets: {
      type: Number,
      required: true,
    },

    reps: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Workout', workooutSchema);
