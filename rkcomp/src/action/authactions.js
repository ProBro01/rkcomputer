export const setusernameAction = (type, name) => {
    return {
        type : type,
        username : name
    }
}

export const setemailAction = (type, email) => {
    return {
        type : type,
        useremail : email
    }
}

export const setphoneAction = (type, phone) => {
    return {
        type : type,
        userphone : phone
    }
}