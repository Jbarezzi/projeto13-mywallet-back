import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js"
// import transactionRouter from "./routes/transactionRouter"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(transactionRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT);