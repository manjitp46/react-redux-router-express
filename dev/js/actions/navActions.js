import * as nav from "./navActions"

export function setNav(name) {
    return function(dispatch) {
        dispatch({
            type: "SET_NAV",
            payload: name
        })
    }
}
