export const changeThemeAction = (themeActualState) => {
    return{
        type: "SET_THEME",
        payload: themeActualState
    }
}

export const userAuth = (userCheck) => {
    return{
        type: "SET_USER",
        payload: userCheck
    }
}