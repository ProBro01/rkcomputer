const username = null
export const usernameReducer = (state=username, action) => {
    switch (action.type){
        case "setusername":
            return action.username
        case "clearusername":
            return null
        default:
            return state
    }
}

const email = null
export const userEmailReducer = (state=email, action) => {
    switch (action.type) {
        case "setuseremail":
            return action.useremail
        case "clearuseremail":
            return null
        default:
            return state
    }
}

const phone = null
export const userPhoneReducer = (state=phone, action) => {
    switch(action.type) {
        case 'setuserphone':
            return action.userphone
        case 'clearuserphone':
            return null
        default:
            return state
    }
}

const ip = "http://127.0.0.1:80"
export const ipAddressReducer = (state=ip, action) =>{
    return state
}