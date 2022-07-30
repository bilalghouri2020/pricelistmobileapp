import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"

let store = createStore(rootReducer, compose(applyMiddleware(thunk)))
// let persistor = persistStore()
export default {
    store, store
}
