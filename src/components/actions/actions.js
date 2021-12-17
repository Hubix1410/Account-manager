export const initialAction = (data) => {
    return {
        type: 'INITIAL',
        data: data
    }
}

export const removeUser = (index) => {
    return{
        type: 'REMOVEUSER',
        index: index
    }
}

export const addUser = (newUser) => {
    return{
        type: 'ADDUSER',
        user: newUser
    }
}