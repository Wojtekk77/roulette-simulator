import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearStatsAction } from '../../actions/clearStatsAction';
import { throwBallAction } from "../../actions/throwBallAction"
import { toggleSimulationAction } from "../../actions/toggleSimulationAction"

const StartSimulationButton = (props) => {

    const handleStartSimulation = () => {
        
        var i = 0;
        var Interval = setInterval(() => {
            props.toggleSimualtion(true);
            props.startSimulation(props.fields, props.colorFields, props.partialFields);
            i++;
            if (i >= 100) {
                clearInterval(Interval);
            }
        })
    }
    const handleStopSimulation = () => {
       props.toggleSimualtion(false);
    }
    return (
        <>
        <button onClick={handleStartSimulation} className="btn btn-danger">Start Simulation</button>
        <button onClick={handleStopSimulation} className="btn btn-danger">Stop !!!</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        fields: state.roulette.fields,
        colorFields: state.roulette.colorFields,
        partialFields: state.roulette.partialFields,
        isSimulationActive: state.simulation.isSimulationActive,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startSimulation: (fields, colorFields, partialFields) => dispatch(throwBallAction(fields, colorFields, partialFields)),
        toggleSimualtion: (isActive) => dispatch(toggleSimulationAction(isActive))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSimulationButton)


