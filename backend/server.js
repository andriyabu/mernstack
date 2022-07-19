require('dotenv').config()

const express = require('express')


// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path,'method:',req.method)
    next();
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app!!!'})
})

// port listening
app.listen(process.env.PORT,() => {
    console.log('Server running on port: ',process.env.PORT)
});