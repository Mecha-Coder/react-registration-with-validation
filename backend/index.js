import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import blankRoute from "./routes/blankRoute.js"
import userRoute from "./routes/userRoute.js"

// CONSTANT
const app = express()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200, 
  credentials: true, 
}))


// Try connect to Mongo, if successed -> run server 
try {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB")
  app.listen(PORT, ()=>{
    console.log(`Server running http://localhost:${PORT}`)})
} 
catch (error) {console.log(error)}


//Routes
app.use("/", blankRoute)
app.use("/user", userRoute)