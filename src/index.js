import express from "express";
import cors from "cors";
// import userRouter from "./routes/userRouter"
// import transactionRouter from "./routes/transactionRouter"
import { userRouter, transactionRouter } from "./routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(transactionRouter);