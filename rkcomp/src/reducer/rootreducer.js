import { combineReducers } from "redux";
// reducers
import { usernameReducer, userEmailReducer, userPhoneReducer, ipAddressReducer } from "./authreducers.js"
import { proficency_reducer, loginuserinfo_reducer, UserLogin_reducer } from "./userinforeducer.js"

export const rootReducer = combineReducers({
    usernameReducer, // type : ['setusername', 'clearusername']
    userEmailReducer, // type : ['setuseremail', 'clearuseremail']
    userPhoneReducer, // type : ['setuserphone', 'clearuserphone']
    ipAddressReducer, // type : []
    proficency_reducer, // type: ['addtag', 'removetag']
    loginuserinfo_reducer, // type : ['setuserinfo, 'resetuserinfo']
    UserLogin_reducer, // type : ['setlogin', 'unsetlogin']
})