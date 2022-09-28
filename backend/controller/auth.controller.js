import { userModel } from "../models/user.model.js"
import jwt from "jsonwebtoken"

function getErrorJson(err) {
    return {
        name: err.name,
        message: err.message,
    }
}

export async function signupController(req, res) {
    console.log(req.body)
    try {
        // create the user from the provided data
        var newuser = new userModel({
            username: req.body.username,
            password: req.body.password,
            contact: {
                phone: req.body.phone,
                email_id: req.body.email
            }
        })
        // save the created user
        newuser.save((err, data) => {
            if (err === null) {
                var user = {
                    username: data.username,
                    contact: data.contact,
                    _id: data._id,
                }
                jwt.sign(user, process.env.SECRETKEY, (err, token) => {
                    if (err === null) {
                        newuser.token = token
                        newuser.save((err, data) => {
                            if (err === null) {
                                res.set('Authorization', `Bearer ${token}`)
                                res.status(201).json(data)
                            }
                            else {

                                res.status(500).json(errorjson)
                            }
                        })
                    }
                    else {
                        var errorjson = getErrorJson(err)
                        res.status(500).json(errorjson)
                    }
                })
            }
            else {
                var errorjson = getErrorJson(err)
                res.status(500).json(errorjson)
            }
        })
    } catch (err) {
        var errorjson = getErrorJson(err)
        res.status(500).json(errorjson)
    }
}

export function loginController(req, res) {
    res.json({
        'name' : "aryan",
        "contact" : "7891002011",
        "status" : "success"
    })
}

export function profileEditController(req, res) {
    res.json('edit route')
}

export function resendOTPController(req, res) {
    res.json('rejson otp')
}

export function verifyOTPController(req, res) {
    res.json('verify otp')
}
export function forgotpassController(req, res) {
    res.json('forgot password')
}





/**
 * function sampleFunc(req, res) {
 *      getConnection from the pool
 *      with the help of the connection execute the query
 *      data 
 *      connection release
 *      send data
 * }
 */