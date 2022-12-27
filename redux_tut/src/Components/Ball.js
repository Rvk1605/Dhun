import React,{useState} from 'react'
import { connect } from 'react-redux'

function Ball(props) {
    const [qty, setQty] = useState(1);
  return (
    <div>
        <h1>Ball : {props.ball}</h1>
        <input type="number"  value={qty} onChange={(e)=>{setQty(e.target.value)}}/>
        <div style={{width:'100px', display:'flex' ,justifyContent:"space-between" ,margin:'auto'}}>
            <button onClick={()=>props.buyBall(qty)}>Buy</button>
            <button onClick={props.sellBall}>Sell</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        ball:state.Ball.ball
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyBall : (qty)=>{dispatch({type: 'BUY_BALL' , payload:qty})},
        sellBall : ()=>{dispatch({type: 'SELL_BALL'})}
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Ball)