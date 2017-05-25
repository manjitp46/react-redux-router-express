import * as user from "./userActions"

// user.fetchUser();

export function fetchUser() {
    return function(dispatch) {
        dispatch({
            type: "FETCH_USER_FULFILLED",
            payload: {
                name: 'Saurav',
                age: 24
            }
        })
    }
}

export function setUserName(name) {
    return function(dispatch) {
        dispatch({
            type: "SET_USER_NAME",
            payload: name
        })
    }
}

export function setUserAge(age) {
    return function(dispatch, getState) {
        // console.log(getState)
        dispatch({
            type: "SET_USER_AGE",
            payload: age
        })
    }
}