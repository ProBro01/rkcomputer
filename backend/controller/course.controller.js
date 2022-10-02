import {
    courseModel,
    getCourseById,
    getAllCourses,
    getCourseByNamePages,
    getCourseByTags,
    getCourseBySearchParams
} from "../models/course.model.js"

import { unAuthorizedException } from "../utility/error.js"

export async function getCourseByIdController(req, res, next) {
    // if the we request this endpoint only on course is returened
    try {
        const courseid = req.params.courseid
        var result = await getCourseById(courseid)
        res.json(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export async function createCourseController(req, res, next) {
    /**
     * course_name
     * course_title
     * description
     * num_of_project
     * num_of_assignment
     * num_of_videos
     * tags
     * 
     */
    try {
        var coursedata = {
            course_intro: {
                course_name: req.body.course_name,
                course_title: req.body.course_title
            },
            course_description: {
                description: req.body.description,
                num_of_project: req.body.num_of_project,
                num_of_assignment: req.body.num_of_assignment,
                num_of_videos: req.body.num_of_videos
            },
            tags: req.body.tags,
        }
        var searchParams = []
        // filter the tag spaces
        searchParams = [...req.body.tags]
        coursedata.searchParams = searchParams  
        // for(var i = 0; i < req.body.tags.length; i++){
        //     // only push the tags for now but later will push the keyword from the name as well
        // }
        var newCourse = new courseModel(coursedata)
        newCourse = await newCourse.save()
        res.json(newCourse)
    }
    catch (err) {
        console.log("error!")
        console.log(err)
        res.status(500).json({ "message": "Internal Server Error" })
    }
    
}

export async function getAllCourseController(req, res, next) {
    // if the we request this endpoint multiple couses are returned so sort it according to the number of students enrolled
    try {
        if (req.user.isAdmin) {
            var coursequery = req.query.searchname
            var pagenumber = req.query.page
            if (coursequery === "" || coursequery === undefined || coursequery.length > 50) {
                res.status(400).json({ message: "Bad Request" })
            }
            else {
                var result = await getAllCourses(pagenumber)
                res.json(result)
            }
        }
        else{
            throw new unAuthorizedException()
        }
    }
    catch (err) {
        if(err.name === "AdminAuthError"){
            consoel.log(err.message)
            console.log(err.solution)
            res.status(403).json({ message: "Forrbiden access" })
        }
        else{
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
}

export async function getCourseByNameController(req, res, next){
    var result = []
    // search on the bases of name
    result = [...result, ...await getCourseByNamePages({queryname : req.query.searchname, pagenumber : req.query.page, length : req.query.length})]
    // search on the bases of tags (send the array)
    if(req.query.searchname.split().length === 1){
        result = [...result, ...await getCourseByTags(req.query.searchname)]
    }
    res.json(result)
}

export async function randomSearchController(req, res, next){
    try{
        var result = await getCourseBySearchParams(req.query.searchname)
        res.json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : "Internal Server Error"})
    }
}