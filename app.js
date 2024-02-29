// SERVER FILE

// node imports
import express from "express";
import bodyparser from "body-parser"
import mongoose from "mongoose";
import cors from "cors"
import "dotenv/config"

// self imports
import { router as api } from "./api/routes/api.mjs"
import { errorMiddleware } from "./middlewares/errorheandler.mjs";
// import { requeststatus } from "./middlewares/statusloger.mjs";

// env constants
const app = express()
const port = process.env.PORT
const uri = process.env.MONGO_URI
const frontend = process.env.FRONTEND

// origen settings
let corsOptions = {

    origin: frontend,
    optionSuccessStatus: 200

}

// express prefixes middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json())


// moddlewares
app.use(cors(corsOptions))
app.use(errorMiddleware)
// app.use(requeststatus)

// use of routes
app.use(api)

// monogdb connection and server up
mongoose.connect(uri).then(() => {
    console.log("database connected ", uri)
    app.listen(port, () => {
        console.log(`http://127.0.0.1:${port}/`)
    })
}).catch((err) => {
    console.log(err)
})



