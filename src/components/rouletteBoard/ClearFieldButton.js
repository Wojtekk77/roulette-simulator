import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearAllBetsAction } from '../../actions/clearAllBetsAction'


const ClearFieldButton = (props) => {

    const handleClearBets = () => {
        const clearedFields = props.fields.map((field) => 
        {
            field.Bid = 0
            return  field
        })
        props.clearBets(clearedFields);
    }

    return (
        <div>
            <button onClick={handleClearBets} className="btn btn-warning">Clear Bets</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { fields : state.fields  }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        clearBets : (fields) => dispatch(clearAllBetsAction(fields)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearFieldButton)
