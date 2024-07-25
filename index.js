 import express from 'express';
import AllRoutes from "./routes/index.js";
import dotenv from "dotenv"
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()
app.use(cookieParser());
app.use(morgan("combined"));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
dotenv.config();
app.use(express.json());
app.get('/', function (req, res) {
  res.send("hii");
  
});

app.use("/api/v1",AllRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."));


// app.post('/register',Registration)

// app.post('/login',Login)

app.listen(process.env.PORT_NUMBER ,() =>{
  console.log(`server is running on port ${process.env.PORT_NUMBER}.`);
})