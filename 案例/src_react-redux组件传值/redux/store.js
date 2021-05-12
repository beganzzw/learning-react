import {createStore ,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk  from 'redux-thunk'

//汇总reducer
const allReducer = combineReducers({
    countReducer:countReducer,
    personReducer:personReducer
})
export default createStore(allReducer,applyMiddleware(thunk))


