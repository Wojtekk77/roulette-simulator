import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearAllBetsAction } from '../../actions/clearAllBetsAction'


const ClearFieldButton = (props) => {

    const handleClearBets = () => {
        props.clearBets(props.fields);
    }

    return (
        <div>
            <button onClick={handleClearBets} className="btn btn-warning">Clear Single Bets</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { fields: state.fields }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearBets: (fields) => dispatch(clearAllBetsAction(fields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearFieldButton)
