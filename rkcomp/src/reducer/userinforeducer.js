const proficency_tags = []
export const proficency_reducer = (state = proficency_tags, action) => {
    switch (action.type) {
        case 'addtag':
            return [...state, action.tag]
        case 'removetag':
            return state.filter((element) => {
                return element !== action.tag
            })
        default:
            return state
    }
}

const userinfo = {}
export const loginuserinfo_reducer = (state = userinfo, action) => {
    switch(action.type) {
        case "setloginuserinfo":
            return action.userinfoObj
        case "resetloginuserinfo" : 
            return {}
        default:
            return state
    }
}

const isUserLoggedin = false
export const UserLogin_reducer = (state = isUserLoggedin, action) => {
    switch(action.type){
        case 'setlogin' : 
            return true
        case 'unsetlogin' :
            return false
        default : 
            return state
    }
}