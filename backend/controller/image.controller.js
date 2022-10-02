import { imageModel } from "../models/images.model.js"

export async function getImageController(req, res, next) {
    const image_id = req.params.imageid
    var imgquery = imageModel.findById(image_id)
    var result = await imgquery.exec()
    res.send(result)
}