const defaultState = {
    navName: 'home'
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_NAV":
            {
                return {...state,
                    navName: action.payload
                }
            }
    }
    return state
}