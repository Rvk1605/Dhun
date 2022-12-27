const initialState = {
    bat : 20
}

const BatReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'BUY_BAT' :
            return {...state,bat:state.bat-1} //Immutable Change
        default :
            return state
    }
}

export default BatReducer;