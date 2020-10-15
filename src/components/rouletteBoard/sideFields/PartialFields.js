import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setBetAction } from "../../../actions/setBetAction.js";
import "../../../styles/PartialFields.css"
export const PartialFields = (props) => {
    const myBetOnField = props.isBet ? "posRelative" : null;
    const ballOnField = props.ballOnField ? "ballOnField posRelative" : null;


    return (
        <>
            <div
                onClick={props.click}
                className={`partialField field ${ballOnField} ${myBetOnField}`}
            >{props.winFields[0]} - {props.winFields[1]}
                {/* {props.number}
                {ballOnField ? <Ball /> : null}
                {myBetOnField ? <BetOnBoard Bid={props.Bid} /> : null} */}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PartialFields)
