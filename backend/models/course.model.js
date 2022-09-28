import mongoose from "mongoose"

var moduleTopicSyllabus = new mongoose.Schema({
    module_name : {
        type : String,
        required : true 
    }
})

var courseSyllabusSchema = new mongoose.Schema({
    module_name : {
        type : String,
        required : true,
    },
    module_topics : [
        moduleTopicSyllabus
    ]
})

var CourseteacherSchema = new mongoose.Schema({
    teacher_id : mongoose.ObjectId
})

var courseReviewSchema = new mongoose.Schema({
    review_id : mongoose.ObjectId
})

var courseVideoSchema = new mongoose.Schema({
    video_id : mongoose.ObjectId
})

var courseSchema = new mongoose.Schema({
    course_intro : {
        course_name : String,
        course_title : String
    },
    course_syllabus : [
        courseSyllabusSchema
    ],
    course_description : {
        num_of_project : {
            type : Number
        },
        num_of_assignment : {
            type : Number
        },
        num_of_videos : {
            type : Number
        },
        num_enrolled_students : {
            type : Number
        }
    },
    course_banner_image : mongoose.ObjectId,
    course_teachers : [
        CourseteacherSchema
    ],
    course_review : [
        courseReviewSchema
    ],
    rating : {
        type : Number,
        default : 0
    },
    course_videos : [
        courseVideoSchema
    ]
})

export const courseModel = mongoose.model('course', courseSchema)