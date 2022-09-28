import { google } from "googleapis"
import url  from "url"

const oauthclient = new google.auth.OAuth2(
    "909546312826-t83qu42qadf1l6utnt2s77b46fe9f76r.apps.googleusercontent.com",
    "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",
    "http://localhost/auth/oauth2callback"
)

const scopes = [
    'profile'
];

const authurl = oauthclient.generateAuthUrl({
    access_type : 'online',
    scope : scopes,
    include_granted_scopes: true
})

console.log(authurl)

export function loginwithgoogle(req, res, next){
    res.redirect(authurl)
}

export async function oauthcallback(req, res, next){
    var tokenurl = url.parse(req.url, true).query
    if(tokenurl.error){
        res.send("error")
    }
    else{
        const {tokens} = await oauthclient.getToken(tokenurl.code)
        console.log(tokens)
    }
}