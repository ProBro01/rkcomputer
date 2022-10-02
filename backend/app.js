import express from "express"
import cors from "cors"
import { courseModel } from "./models/course.model.js"
// routers
import { authRoute } from "./routes/auth.route.js"
import { imageRouter } from "./routes/image.route.js"
import { courseRoute } from "./routes/course.route.js"

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
app.use("/image", imageRouter)
app.use("/course", courseRoute)
