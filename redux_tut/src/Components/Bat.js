import React from 'react'
import {connect} from 'react-redux'

function Bat(props) {  //Local for Component
    console.log(props)
  return (
    <div>
    <h1>Bats :{props.bat}</h1>
    <button onClick={props.buyBat}> Buy Bat </button>
    </div>
  )
}


//How do we take values from Store 
// For that we use mapStateToProps
const mapStateToProps = (state) =>{
    return {bat:state.Bat.bat}
}

//How will this component make changes to reducer initial state value
// using mapDispatchToProps 
const mapDispatchToProps = (dispatch) =>{
    return {
        buyBat : ()=>{dispatch({ type:"BUY_BAT" })}  
    }
}

//Connect is a Higher Order Component
//Connect gives mapStateToProps value of state from Global Store ans whatever value is returned from mapStateToProps is that given to Bat Component as Props
//Connect gives mapDispatchToProps a dispatch method which can be used to dispatch an action to the Reducer
export default connect(mapStateToProps , mapDispatchToProps)(Bat)