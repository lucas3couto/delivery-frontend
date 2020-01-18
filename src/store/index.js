import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk';


const initialState = {}
const middleware = [thunkMiddleware]


const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
)

export default store