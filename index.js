import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  })
);

const POST = 8000 || process.env.POST;

app.get("/", function (req, res) {
  res.json({ message: "Server listening on port" });
});

connectDB();

app.listen(POST, () => {
  console.log("Server listening on port", POST);
});
