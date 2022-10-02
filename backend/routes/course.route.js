import express from "express"
import {
    getCourseByIdController,
    createCourseController,
    getAllCourseController,
    randomSearchController
} from "../controller/course.controller.js"

export const courseRoute = express.Router()

courseRoute.route("/createcourse").post(createCourseController)
courseRoute.route("/searchcourseid/:courseid").get(getCourseByIdController)
courseRoute.route("/getallcourse").get(getAllCourseController)
courseRoute.route("/coursenamesearch").get(randomSearchController) // this route is used by the user