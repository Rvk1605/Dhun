import {createStore} from 'redux'
// import BatReducer from './batReducer'
// import BallReducer from './ballReducer';
import rootReducer from './rootReducer';

const store = createStore(rootReducer); // this can take only one reducer so combined all reducers in one root Reducer

//For Multiple Reducer


export default store