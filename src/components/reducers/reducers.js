const initialstate = { users: [] };

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'INITIAL':
            return {
                ...state, users: action.data
            }
        case 'REMOVE':
            return {
                ...state, users: state.users.splice(action.index++ , state.users.length--)
            }
        default:
            return state;
    }
}

export default userReducer;