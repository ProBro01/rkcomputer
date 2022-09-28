import mongoose from "mongoose";

var reviewSchema = new mongoose.Schema({
    review_user : mongoose.ObjectId,
    review_heading : {
        type : String,
        required : true
    },
    review_description : {
        type : String, 
        required : true
    }
})

export const reviewModel = mongoose.model('review', reviewSchema)