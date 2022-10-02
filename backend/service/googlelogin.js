import { google } from "googleapis"
import url from "url"
import jwt from "jsonwebtoken"
import { userModel } from "../models/user.model.js"

const oauthclient = new google.auth.OAuth2(
    "909546312826-t83qu42qadf1l6utnt2s77b46fe9f76r.apps.googleusercontent.com",
    "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",
    "http://localhost/auth/oauth2callback"
)

const scopes = [
    'profile',
    "email",
    "openid"
];

const authurl = oauthclient.generateAuthUrl({
    access_type: 'online',
    scope: scopes,
    include_granted_scopes: true
})

export function loginwithgoogle(req, res, next) {
    res.redirect(authurl)
}

export async function oauthcallback(req, res, next) {
    try {
        var tokenurl = url.parse(req.url, true).query
        if (tokenurl.error) {
            res.send("error")
        }
        else {
            const { tokens } = await oauthclient.getToken(tokenurl.code)
            /**
             * @TODO get the token 
             * check if the user is present in the database or not
             * if yes direct redirect it by providing the jwt token
             * if not register it first and then redirect it after providing the token
             */
            var id_token = jwt.decode(tokens.id_token)
            var user = await userModel.findOne({ contact: { email_id: id_token.email } })
            let useraccesstoken
            if (user === null) {
                const newuser = await createNewuserWithgoogle(id_token)
                useraccesstoken = jwt.sign(newuser.toJSON(), process.env.SECRETKEY)
            }
            else {
                const newuserdata = {
                    _id: user._id,
                    contact: user.contact,
                    username: user.username,
                    isAdmin: user.isAdmin,
                    enrolled_courses: user.enrolled_courses,
                    intresed_courses: user.intrested_courses,
                    skill_achived: user.skill_achived,
                    image_id: user.image_id
                }
                useraccesstoken = jwt.sign(newuserdata, process.env.SECRETKEY)
            }
            res.cookie("token", `Bearer ${useraccesstoken}`)
            res.redirect("http://localhost:3000")
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).redirect("http://localhost:3000/internalservererror")
    }
}

async function createNewuserWithgoogle(id_token) {

    try {
        var newuserdata = {
            username: `${id_token.given_name} ${id_token.family_name}`,
            password: "@signinWithGoogle@",
            contact: {
                email_id: id_token.email,
            }
        }
        var newuser = new userModel(newuserdata)
        var x = await newuser.saveImageUrl(id_token.picture)
        newuser = newuser.set("image_id", x._id)
        newuser = await newuser.save()
        return newuser
    }
    catch (err) {
        console.log(err)
        return
    }

}