const mongoose = require("mongoose");
const db = require("../models");

// GET method route
module.exports = function(app) {
app.get("/api/workouts", function(req, res) {
  db.workout
    .find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST method route
app.post("/api/workouts", ({ body }, res) => {
  db.workout
    .create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/workouts/range", function(req, res) {
  db.workout
    .find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

}
