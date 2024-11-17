import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import messageRouter from "./routes/messageRoute.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});

const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("working fine..");
});

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port: ${PORT}`);
});
