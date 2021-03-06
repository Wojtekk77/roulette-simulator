import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProfitCounter = (props) => {

    return (
        <div className={props.field.color}>
            {props.field.id} : {props.field.numOfSets} sets, {props.field.numOfWins} wins
        </div>
    )
}


const mapStateToProps = (state, ownState) => ({
    fieldList: state.roulette.fields
})

const mapDispatchToProps = (dispatch) => {
    return {
        throwBall: (fields) => { dispatch(fields) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfitCounter)