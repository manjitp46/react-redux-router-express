import { combineReducers } from "redux"
import { routerReducer as routing } from 'react-router-redux'

import tweets from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
	tweets,
	user,
	routing
})