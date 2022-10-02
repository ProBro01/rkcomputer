import mongoose from "mongoose"

const imageSchema = mongoose.Schema({
    image_string : {
        type : String
    },
    image_type : {
        type : String
    }
})


export const imageModel = mongoose.model("image", imageSchema)