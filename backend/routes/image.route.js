import express from "express"
import { getImageController } from "../controller/image.controller.js"

export const imageRouter = express.Router()

imageRouter.route("/getimage/:imageid").get(getImageController)