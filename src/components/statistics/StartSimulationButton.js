import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearStatsAction } from '../../actions/clearStatsAction';
import { throwBallAction } from "../../actions/throwBallAction"

const StartSimulationButton = (props) => {

    const handleStartSimulation = () => {
        var i = 0;
        var Interval = setInterval(() => {
            props.startSimulation(props.fields, props.colorFields, props.partialFields);
            i++;
            if (i > 500) {
                clearInterval(Interval);
            }
        })
    }

    return (
        <button onClick={handleStartSimulation} className="btn btn-danger">Start Simulation</button>
    )
}

const mapStateToProps = (state) => {
    return {
        fields: state.fields,
        colorFields: state.colorFields,
        partialFields: state.partialFields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startSimulation: (fields, colorFields, partialFields) => dispatch(throwBallAction(fields, colorFields, partialFields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSimulationButton)

