import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../styles/SpecialNumOfSets.css";
import PartialFields from '../rouletteBoard/sideFields/PartialFields';

const SpecialNumOfSets = (props) => {

    return (
        <div className={props.field.color}>
            {props.field.description} : {props.field.numOfSets} sets, {props.field.numOfWins} wins
        </div>
    )
}


const mapStateToProps = (state, ownState) => ({
    fieldList: state.fields,
    colorFields: state.colorFields,
    partialFields: state.partialFields
})

const mapDispatchToProps = (dispatch) => {
    return {
        throwBall: (fields) => { dispatch(fields) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SpecialNumOfSets)