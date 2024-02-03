// fixing env which basically handel the environment variables for us
require('dotenv').config()

// importing mongoose
const mongoose=require('mongoose')

const express=require('express')
const {MongoClient} = require('mongodb');

// for local db connection
//const {connectToDb, getDb} = require('./connectDb')

require("../backend/models/userSchema")

const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/users")


//making an instance of express 
const app=express()

// middleware
app.use(express.json()); // This middleware parses JSON in the request body
app.use((req, res, next) => {
    console.log(req.body);
    next();
});

app.use('/api/workouts/',workoutRoutes)

// using  users routes
app.use('/api/users/',userRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(() => {
      console.log('Connected to the MongoDB cluster');
      app.listen(process.env.PORT, () => { 
          console.log('Server started at port ',process.env.PORT)
          
      })
    })
  .catch((err) => console.log("HERE" , err));



  



