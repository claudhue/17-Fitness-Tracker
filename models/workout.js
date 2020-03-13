const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "exercise type is required"
      },
      name: {
        type: String,
        trim: true,
        required: "name is required"
      },
      duration: {
        type: Number,
        trim: true,
        required: true
      },
      weight: {
        type: Number,
        trim: true,
        required: true
      },
      reps: {
        type: Number,
        trim: true,
        required: true
      },
      sets: {
        type: Number,
        trim: true,
        required: true
      }
    }
  ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;