const userAuthReducer = (state = false, action) => {
    switch(action.type){
        case "SET_USER":
            return action.payload
        default:
            return state
    }
}

export default userAuthReducer;