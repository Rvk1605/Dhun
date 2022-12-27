const initialState = {
    ball:50
}

const BallReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'BUY_BALL' :
            return {...state ,ball:state.ball-action.payload} //Immutable Change
        case 'SELL_BALL':
            return {
                ...state,
                ball:state.ball+1   //for immutable Changes
            }
        default :
            return state
    }
}

export default BallReducer