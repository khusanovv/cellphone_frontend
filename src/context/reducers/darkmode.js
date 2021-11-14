const themeReducer = (state = true, action) => {
    switch(action.type){
        case "SET_THEME":
            return action.payload
        default:
            return state
    }
}

export default themeReducer;


