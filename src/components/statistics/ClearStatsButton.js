import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearStatsAction } from '../../actions/clearStatsAction';


const ClearStatsButton = (props) => {

    const handleClearStats = () => {
        props.clearStats(props.fields);
    }

    return (
        <button onClick={handleClearStats} className="btn btn-danger">Clear Stats</button>
    )
}

const mapStateToProps = (state) => {
    return { fields: state.fields }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearStats: (fields) => dispatch(clearStatsAction(fields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearStatsButton)
