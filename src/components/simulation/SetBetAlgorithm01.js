import React, { Component } from 'react'
import { connect } from 'react-redux'
import { throwBallAction } from './../../actions/throwBallAction' 
import {setBetColorAction} from './../../actions/setBetAction'
import {clearColorBetsAction} from './../../actions/clearAllBetsAction'
import { throwBallAlorithm01action } from '../../actions/throwBallAlorithm01action'
const SetBetAlgorithm01 = (props) => {

    const colorChooser = (id) => {
        if(props.fields[id]['color']=="green"){return 0}
        return props.fields[id]['color'] === "red" ? 38 : 37
    } 
    const checkIfWin = (setId,choosenColorID) => {
        
    }
    const handleSetAlgorithm01 = () => {
        var i = 0;
        var pickedField = 0;
        var NumberOfBids = 0;
        var NumberOfSetsOfBall = 0;
        var TotalWinFromColor = 0;
        var setsFieldColorList = [0]
        var myListOfBets = []
        // const color = props.fields[pickedField]['color'];
        // console.log(pickedField,color)
        var Interval = setInterval(()=>{
            
            props.clearColorBetsAction(props.colorFields);

            props.setBetOnColorField(props.colorFields,colorChooser(pickedField))
            
            pickedField = props.fields[Math.floor(Math.random() * props.fields.length)]['id'];
            props.throwBallAlorithm01action(props.fields, props.colorFields, props.partialFields, pickedField)
            
            // console.log(colorChooser(pickedField) == props.fields[pickedField]['color']);

        if (i >= 1000) { clearInterval(Interval)} 
        i++;
        })
    }
  
    return (
        <button className="btn btn-primary" onClick={handleSetAlgorithm01} >
            Start Simulation with algorithm01 {props.currentWinner}
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
        throwBallAlorithm01action : (fields, colorFields, partialFields, pickedField) =>dispatch(throwBallAlorithm01action(fields, colorFields, partialFields, pickedField))
}}

export default connect(mapStateToProps, mapDispatchToProps)(SetBetAlgorithm01)
