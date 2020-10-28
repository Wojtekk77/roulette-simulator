import React, { Component } from 'react'
import { connect } from 'react-redux'
import { throwBallAction } from './../../actions/throwBallAction' 
import {setBetColorAction} from './../../actions/setBetAction'
import {clearColorBetsAction} from './../../actions/clearAllBetsAction'
const SetBetAlgorithm01 = (props) => {

    var id = props.currentWinner;
    const handleSetAlgorithm01 = () => {
        
        props.throwAlgorithm01(props.fields,props.colorFields,props.partialFields)
        console.log(id,props.fields[props.currentWinner]["color"]=="red")
        if(props.fields[props.currentWinner]["color"]=="red")
        {id=37}
        else if(props.fields[props.currentWinner]["color"]=="black")
        {id=38}
        props.setBetOnColorField(props.colorFields,parseInt(id))
        props.clearColorBetsAction(props.colorFields)
    }
    
  
        return (
            <button className="btn btn-primary" onClick={handleSetAlgorithm01} >
                Start Simulation with algorithm01
            </button>
        )
    
}

const mapStateToProps = (state) => ({
    fields : state.roulette.fields,
    colorFields : state.roulette.colorFields,
    partialFields : state.roulette.partialFields,
    setAlgorithm01 : state.simulation.setAlgorithm01,
    currentWinner : state.simulation.currentWinner,
})
//chce aby po throw ball nastapilo wybranie czy wybieramy czerwone czy czarne
const mapDispatchToProps = (dispatch) => { 
    return {
        throwAlgorithm01 : (fields, colorFields, partialFields) => dispatch(throwBallAction(fields, colorFields, partialFields)),
        setBetOnColorField : (fields, id) => dispatch(setBetColorAction(fields, id)),
        clearColorBetsAction : (fields) => dispatch(clearColorBetsAction(fields)),
}}

export default connect(mapStateToProps, mapDispatchToProps)(SetBetAlgorithm01)
