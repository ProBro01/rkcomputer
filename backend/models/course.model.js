import mongoose from "mongoose"

var moduleTopicSyllabus = new mongoose.Schema({
    module_name: {
        type: String,
        required: true
    }
})

var courseSyllabusSchema = new mongoose.Schema({
    module_name: {
        type: String,
        required: true,
    },
    module_topics: [
        moduleTopicSyllabus
    ]
})

var courseReviewSchema = new mongoose.Schema({
    review_id: mongoose.ObjectId
})

var courseVideoSchema = new mongoose.Schema({
    video_id: mongoose.ObjectId
})

var courseSchema = new mongoose.Schema({
    course_intro: {
        course_name: {
            required: true,
            type: String,
            maxLength: 100
        },
        course_title: {
            required: true,
            type: String
        },
    },

    course_syllabus: [
        courseSyllabusSchema
    ],

    course_description: {
        description: {
            type: String
        },
        num_of_project: {
            type: Number
        },
        num_of_assignment: {
            type: Number
        },
        num_of_videos: {
            type: Number
        },
        num_enrolled_students: {
            type: Number,
            default: 0
        }
    },

    course_banner_image: mongoose.ObjectId,

    course_teacher: mongoose.ObjectId,

    course_review: [
        courseReviewSchema
    ],

    rating: {
        type: Number,
        default: 0
    },

    course_videos: [
        courseVideoSchema
    ],

    tags: [],

    date_of_creation: {
        month: {
            type: String,
            default: new Date(Date.now()).getMonth()
        },
        year: {
            type: String,
            default: new Date(Date.now()).getFullYear()
        }
    },

    searchParams : {
        type : [],
        required : true
    }

}, { timestamps: true })

export const courseModel = mongoose.model('course', courseSchema)

export async function getCourseById(courseid) {
    var getcoursequery = courseModel.findById(courseid)
    var result = await getcoursequery.exec()
    return result
}

export async function getAllCourses(pagenumber) {
    // only for admins
    var coursenamequery = courseModel.createPaginationQuery({}, pagenumber, 5)
    var result = await coursenamequery.exec()
    return result
}

export async function getCourseByNamePages({queryname, pagenumber, length}) {
    // users
    var query = createPaginationQuery({ $text : { $search : queryname } }, pagenumber, length)
    var result = await query.exec()
    return result
}

export async function getCourseByTags(tagnames) {
    var query = courseModel.find({tags : 
        {
            $all : tagnames
        }
    })
    var result = await query.exec()
    return result
}

function createPaginationQuery(query, pagenumber, length){
    var skips = 0
    if(pagenumber > 1){
        skips = length*(pagenumber - 1)
    }
    var coursenamequery = courseModel.find(query)
        .limit(length)
        .skip(skips)
    return coursenamequery
}

export async function getCourseBySearchParams(searchparams) {
    var query = courseModel.find({searchParams : 
        {
            $all : searchparams
        }
    }).limit(5)
    var result = await query.exec()
    return result
}