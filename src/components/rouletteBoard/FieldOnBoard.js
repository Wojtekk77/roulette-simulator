import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/FieldOnBoard.css";
import Ball from "./Ball";
import BetOnBoard from "./BetOnBoard";
const FieldOnBoard = (props) => {
  const myBetOnField = props.isBet ? "posRelative" : null;
  const ballOnField = props.ballOnField ? "ballOnField posRelative" : null;
  const dispatch = useDispatch();
 
  return (
    
    <>
      <div
        onClick={props.click}
        className={`${props.color} field ${ballOnField} ${myBetOnField}`}
      >
        {props.number}
        {/* {ballOnField ? <Ball /> : null} */}
        {myBetOnField ? <BetOnBoard Bid={props.Bid} /> : null}
      </div>
    </>
  );
};

export default FieldOnBoard;
