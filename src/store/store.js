import { createStore, combineReducers } from "redux"
import house_reduce from "./house_reducer"

let redusers = combineReducers({
	houses: house_reduce,
})

let store = createStore(redusers)

export default store
