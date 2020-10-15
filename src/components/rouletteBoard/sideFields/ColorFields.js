import React, { Component } from 'react'
import { connect } from 'react-redux'
import BetOnBoard from "../BetOnBoard";
import "../../../styles/MyBet.css";

export const ColorFields = (props) => {

    const myBetOnField = props.Bid > 0 ? "posRelative" : null;
    // const ballOnField = props.ballOnField ? "ballOnField posRelative" : null;


    return (
        <>
            <div
                onClick={props.click}
                className={`${props.color} posRelative field ${myBetOnField}`}
            >{props.color}

                {myBetOnField ? <BetOnBoard Bid={props.Bid} /> : null}
            </div>
        </>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorFields)
