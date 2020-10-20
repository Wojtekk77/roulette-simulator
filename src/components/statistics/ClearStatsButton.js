import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearStatsAction } from '../../actions/clearStatsAction';


const ClearStatsButton = (props) => {

    const handleClearStats = () => {
        props.clearStats(props.fields, props.colorFields, props.partialFields);
    }

    return (
        <button onClick={handleClearStats} className="btn btn-danger">Clear Stats</button>
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
        clearStats: (fields, colorFields, partialFields) => dispatch(clearStatsAction(fields, colorFields, partialFields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearStatsButton)
