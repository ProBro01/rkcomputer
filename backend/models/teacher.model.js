import mongoose from "mongoose"

var CourseteacherSchema = new mongoose.Schema({
    teacher_id : mongoose.ObjectId
})

export const courseTeacherModel = mongoose.model('teacher', CourseteacherSchema)

