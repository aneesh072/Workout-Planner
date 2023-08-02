require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//connection to the mongodb and running the port
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to the request
    app.listen(process.env.PORT, () => {
      console.log('Listeing to the port');
    });
  })
  .catch((err) => {
    console.log(err);
  });
