import express from "express"
import cors from "cors"
import { authRoute } from "./routes/auth.route.js"
import "./models/user.model.js"

export const app = express()

var corsoptions = {
    origin : "http://localhost:3000",
    methods : 'GET,PUT,POST,DELETE',
    allowedHeaders : 'Content-Type,Authorization',
    credentials : true,
}

app.use(cors(corsoptions))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use("/auth", authRoute)