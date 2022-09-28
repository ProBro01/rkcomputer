import mongoose from "mongoose";

var enrolledCourseSchema = new mongoose.Schema({
    course_id: mongoose.ObjectId,
    watched_videos: [], // ObjectId of videos will be pushed in this array
    isCompleted: Boolean
})

var intrestedCourseSchema = new mongoose.Schema({
    course_id: mongoose.ObjectId
})

var reviewListIdSchema = new mongoose.Schema({
    review_id: mongoose.ObjectId
})

var skillAchivedSchema = new mongoose.Schema({
    skill_name: {
        type: String,
    },
    proficency: {
        type: String,
    }
})

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        trim: true,
        minlength: 30,
        minlength: 5,
        required: [true, "required username"]
    },
    password: {
        type: String,
        required: [true, "required password"]
    },
    contact: {
        email_id: String,
        phone: String
    },
    address: {
        pincode: String,
        city: String,
        state: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    image_id: mongoose.ObjectId,
    last_login: Date,
    otp: {
        type: String,
        default: ""
    },
    token: {
        type: String
    },
    current_working: {
        type: String
    },
    enrolled_courses: [
        enrolledCourseSchema
    ],
    intrested_courses: [
        intrestedCourseSchema
    ],
    reviews_list: [
        reviewListIdSchema
    ],
    skill_achived: [
        skillAchivedSchema
    ],
    isAdmin: {
        type: Boolean,
        default: false
    }
})

export const userModel = mongoose.model('User', userSchema)