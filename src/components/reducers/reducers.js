const initialstate = { users: [] };

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'INITIAL':
            return {
                ...state, users: action.data
            }
        case 'REMOVEUSER':
            // let removeUserState = state.users;
            // console.log("yooo", removeUserState, action.user);
            // return {
            //     ...state, users: removeUserState
            // }
            return state

        case 'ADDUSER':
            let addUserState = state.users;
            addUserState.push(action.user)
            console.log("yooo", addUserState, action.user);
            return {
                ...state, users: addUserState
            }
        default:
            return state;
    }
}

export default userReducer;