import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import feedbackRouter from "./routes/feedback.route.js";
import db from "./database/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', feedbackRouter);

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