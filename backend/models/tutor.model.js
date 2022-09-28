import mongoose from "mongoose";

var tutorCourseSchema = new mongoose.Schema({
    course_id : mongoose.ObjectId
})

var tutorSchema = new mongoose.Schema({
    teacher_username : {
        type : String,
        required : true
    },
    password : {
        type : String, 
        required  : true
    },
    tutor_name : {
        type : String,
        required : true
    },
    tutor_profession : {
        type : String,
        required : true
    },
    tutor_description : {
        type : String,
        required : String
    },
    tutor_courses : [
        tutorCourseSchema
    ],
    last_login : {
        type : Date
    },
    teacher_join : {
        type : Date,
        default : Date.now()
    },
    age : {
        type : Number,
        min : 0
    },
    gender : {
        type : String,
        enum : ['M', 'F'],
        uppercase : true
    },
    address : {
        pincode : String,
        city : String,
        state : String
    },
    contact : {
        email_id : String,
        phone : String
    },
    teacher_qualification : {
        type : String,
        required : true
    },
    tutor_image : mongoose.ObjectId
})

export const tutorModel = new mongoose.model('tutor', tutorSchema)