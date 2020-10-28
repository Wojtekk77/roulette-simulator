import React, { Component } from 'react'
import { connect } from 'react-redux'
import { throwBallAction } from './../../actions/throwBallAction' 
import {setBetColorAction} from './../../actions/setBetAction'
const SetBetAlgorithm01 = (props) => {

    const handleSetAlgorithm01 = () => {
        console.log('nothing')
        props.throwAlgorithm01(props.fields,props.colorFields,props.partialFields)
        
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
})
//chce aby po throw ball nastapilo wybranie czy wybieramy czerwone czy czarne
const mapDispatchToProps = (dispatch) => { 
    return {
        throwAlgorithm01 : (fields, colorFields, partialFields) => dispatch(throwBallAction(fields, colorFields, partialFields))
}}

export default connect(mapStateToProps, mapDispatchToProps)(SetBetAlgorithm01)
