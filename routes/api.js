const mongoose = require("mongoose");
const db = require("../models");

// GET method route
app.get("/api/workouts", function(req, res) {
  res.send("GET");
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
  res.send("POST");
  db.workout
    .create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
//   db.workout.create(body)
//   .then(data => {
//     res.json(data);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// })
