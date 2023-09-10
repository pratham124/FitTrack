import 'express-async-errors'
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 3000;

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

const date = new Date();



try {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}



