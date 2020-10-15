import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../../../styles/PartialFields.css"
import "../../../styles/MyBet.css";
import BetOnBoard from "../BetOnBoard";
export const PartialFields = (props) => {
    const myBetOnField = props.Bid ? "posRelative" : null;


    return (
        <>
            <div
                onClick={props.click}
                className={`partialField field ${myBetOnField}`}
            >{props.winFields[0]} - {props.winFields[1]}
                {myBetOnField ? <BetOnBoard Bid={props.Bid} /> : null}
            </div>
        </>
    )
}

export default PartialFields
