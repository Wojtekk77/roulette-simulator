import React, { Component } from 'react'
import { connect } from 'react-redux'
import { throwBallAction } from './../../actions/throwBallAction' 
import {setBetColorAction} from './../../actions/setBetAction'
import {clearColorBetsAction} from './../../actions/clearAllBetsAction'
import { throwBallAlorithm01action } from '../../actions/throwBallAlorithm01action'
import SimulationForm from './SimulationForm'
const SetBetAlgorithm01 = (props) => {

    const colorChooser = (id) => {
        if(props.fields[id]['color']=="green"){return 0}
        return props.fields[id]['color'] === "red" ? 38 : 37
    } 
    const handleSetAlgorithm01 = () => {
        var i = 0;
        var pickedField = 0;
        var Interval = setInterval(()=>{
            props.clearColorBetsAction(props.colorFields);
            props.setBetOnColorField(props.colorFields,colorChooser(pickedField))
            pickedField = props.fields[Math.floor(Math.random() * props.fields.length)]['id'];
            props.throwBallAlorithm01action(props.fields, props.colorFields, props.partialFields, pickedField)
        if (i >= props.numOfSimulations) { clearInterval(Interval)} 
        i++;
        },props.speedOfSimulationInMs)
    }
  
    return (
    <>
        <button className="btn btn-primary" onClick={handleSetAlgorithm01} >
            Start algorithm01
        </button>
        <SimulationForm/>
        <p>total bids:{props.totalBids}</p> <p>total wins: {props.totalWins}</p>
        
    </>
    )
    
}

const mapStateToProps = (state) => ({
    fields : state.roulette.fields,
    colorFields : state.roulette.colorFields,
    partialFields : state.roulette.partialFields,
    setAlgorithm01 : state.simulation.setAlgorithm01,
    currentWinner : state.simulation.currentWinner,
    totalBids: state.simulation.totalBids,
    totalWins: state.simulation.totalWins,
    numOfSimulations: state.simulation.numOfSimulations,
    speedOfSimulationInMs: state.simulation.speedOfSimulationInMs,
})
//chce aby po throw ball nastapilo wybranie czy wybieramy czerwone czy czarne
const mapDispatchToProps = (dispatch) => { 
    return {
        throwAlgorithm01 : (fields, colorFields, partialFields) => dispatch(throwBallAction(fields, colorFields, partialFields)),
        setBetOnColorField : (fields, id) => dispatch(setBetColorAction(fields, id)),
        clearColorBetsAction : (fields) => dispatch(clearColorBetsAction(fields)),
        throwBallAlorithm01action : (fields, colorFields, partialFields, pickedField) =>dispatch(throwBallAlorithm01action(fields, colorFields, partialFields, pickedField))
}}

export default connect(mapStateToProps, mapDispatchToProps)(SetBetAlgorithm01)
