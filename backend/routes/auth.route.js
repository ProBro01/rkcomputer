import express from "express"
import { 
        loginController,
        signupController,
        resendOTPController,
        verifyOTPController,
        forgotpassController
    } from "../controller/auth.controller.js"

import { loginwithgoogle, oauthcallback } from "../service/googlelogin.js"

export const authRoute = express.Router()

/*
    login
    sign up
    edit user profile
    resend otp
    verify otp
    forgot password
*/

authRoute.get("/login", loginController)
authRoute.post("/signup", signupController)
authRoute.get("/resendotp", resendOTPController)
authRoute.get("/verifyotp", verifyOTPController)
authRoute.get('/forgotpass', forgotpassController)
// google login route
authRoute.route("/googlelogin").get(loginwithgoogle)
authRoute.route("/oauth2callback").get(oauthcallback)