import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const FieldOnBoard = (props) => {
  const myBetOnField = props.isBet ? "posRelative" : null;
  const ballOnField = props.ballOnField ? "ballOnField posRelative" : null;
  const dispatch = useDispatch();

  return (
    <>
      {/* <div
        onClick={props.click}
        className={`${props.color} field ${ballOnField} ${myBetOnField}`}
      >
        {props.number}
        {ballOnField ? <Ball /> : null}
        {myBetOnField ? <MyBet bid={props.bid} /> : null}
      </div> */}
      fieldOnBoard <br></br>
    </>
  );
};

export default FieldOnBoard;
