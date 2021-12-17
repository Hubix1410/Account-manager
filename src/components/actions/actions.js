export const initialAction = (data) => {
    return {
        type: 'INITIAL',
        data: data
    }
}

export const removeUser = (index) => {
    return{
        type: 'REMOVE',
        index: index
    }
}