require('dotenv').config()

const express = require('express')

// import workouts from routers
const workoutRoutes = require('./routes/workouts')

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path,'method:',req.method)
    next();
})

// routes
app.use(workoutRoutes)

// port listening
app.listen(process.env.PORT,() => {
    console.log('Server running on port: ',process.env.PORT)
});