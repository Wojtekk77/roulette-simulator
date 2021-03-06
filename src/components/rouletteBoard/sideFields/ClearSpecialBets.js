import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearColorBetsAction, clearPartialBetsAction } from "../../../actions/clearAllBetsAction.js";


const ClearSpecialBets = (props) => {

    const handleClearBets = () => {
        props.clearColorBets(props.colorFields);
        props.clearPartialBets(props.partialFields);
    }

    return (
        <div>
            <button onClick={handleClearBets} className="btn btn-warning">Clear Special Bets</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        colorFields: state.roulette.colorFields,
        partialFields: state.roulette.partialFields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearColorBets: (fields) => dispatch(clearColorBetsAction(fields)),
        clearPartialBets: (fields) => dispatch(clearPartialBetsAction(fields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearSpecialBets)