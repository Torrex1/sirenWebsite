import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
import cors from 'cors'
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.route.js";
import feedbackRouter from "./routes/feedback.route.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import orderRouter from "./routes/order.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', userRouter);
app.use('/api', feedbackRouter);
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', orderRouter);

const start = async () => {
    try {
        await db.connect().then(() => console.log('DB connected'));
        app.listen(PORT, () => {
            console.log('Server started on ' + `http://localhost:${PORT}`);
        });
    }

    catch (e) {
        console.log(`DB error ${e}`);
    }
    
}
start();