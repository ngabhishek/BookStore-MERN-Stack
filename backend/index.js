import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose, { mongo } from "mongoose";
// import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js"; 
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Landing page
app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack tutorial !!!');
});

app.use("/books", bookRoute);

mongoose.
    connect(mongoDBURL).
    then(() =>{
        console.log('App connected to mongoDB.');
        app.listen(PORT, () => {
            console.log(`App is listening on port > ${PORT}`);
        });
    }).
    catch((error) => {
        console.log(error);
    });