import React, { Component } from 'react'

import { connect } from 'react-redux'
import ColorFields from './ColorFields'
import PartialFields from './PartialFields'
import { setBetColorAction, setBetPartialAction } from "../../../actions/setBetAction.js";
const SideFields = (props) => {

    const handleClickColorField = (id) => {
        props.setBetColorField(props.colorFields, id);
    };

    const handleClickPartialField = (id) => {
        props.setBetColorField(props.partialFields, id);
    };

    //partialFields
    const partFields =
        props.partialFields.map((field) => {
            return <PartialFields key={field.id} id={field.id} Bid={field.Bid} winFields={field.winFields} color={field.color} click={() => handleClickPartialField(field.id)} />
        })
    //colorFields
    const colFields =
        props.colorFields.map((field) => {
            return <ColorFields key={field.id} id={field.id} Bid={field.Bid} color={field.color} click={() => handleClickColorField(field.id)} />
        })


    return (
        <>
            {partFields}
            {colFields}
        </>
    )
}


const mapStateToProps = (state) => ({
    colorFields: state.colorFields,
    partialFields: state.partialFields
})

const mapDispatchToProps = (dispatch) => ({
    setBetColorField: (fields, id) => dispatch(setBetColorAction(fields, id)),
    setBetPartialField: (fields, id) => dispatch(setBetColorAction(fields, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideFields)
