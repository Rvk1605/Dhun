import {combineReducers}  from 'redux'
import BatReducer from './batReducer';
import BallReducer from './ballReducer';

const rootReducer = combineReducers({
    Bat:BatReducer,
    Ball:BallReducer
})

export default rootReducer