import http from "http"
import dotenv from "dotenv"
import { connectToDB } from "./db/connection.db.js"
import { app } from "./app.js"

dotenv.config({path : ".env"})
const PORT = process.env.PORT
const URI = process.env.DATABASE_URI

var server = http.createServer(app)

server.listen(PORT, "127.0.0.1", async () => {
    await connectToDB(URI)
    console.log(`\x1b[32mServer Started at ${PORT}\x1b[0m`)
})