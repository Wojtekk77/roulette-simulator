import React, { useState, useEffect } from "react";
import { connect,useSelector, useDispatch } from "react-redux";
import "../../styles/FieldOnBoard.css";
import Ball from "./Ball";
import BetOnBoard from "./BetOnBoard";
import { setBetAction } from "../../actions/setBetAction.js";
const FieldOnBoard = (props) => {
  const myBetOnField = props.isBet ? "posRelative" : null;
  const ballOnField = props.ballOnField ? "ballOnField posRelative" : null;
  
  return (
    
    <>
      <div
        onClick={props.click}
        className={`${props.color} field ${ballOnField} ${myBetOnField}`}
      >
        {props.number}
        {ballOnField ? <Ball /> : null}
        {myBetOnField ? <BetOnBoard Bid={props.Bid} /> : null}
      </div>
    </>
  );
};

const mapPropsToState = (state,ownState) => {
  return {fields:state.fields}
} 

const mapDispatchToProps = (dispatch) => {
  return {
    setBet : (fields) => dispatch(setBetAction(fields))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(FieldOnBoard);
