import React from "react";
import "./FieldOnBoard.css";
import Ball from "./Ball";
import "./Ball.css";
import MyBet from "./MyBet";
import "./MyBet.css";
import Bid from "./Bid";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addPerson } from "../actions/buttonAddPersonActions";
import { generatePeople, deletePerson } from "../actions/personActions";
import Person from "./Person.js.js";
import { Link } from "react-router-dom";

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
        {/* {ballOnField ? <Ball /> : null}
        {myBetOnField ? <MyBet bid={props.bid} /> : null} */}
      </div>
    </>
  );
};

export default FieldOnBoard;
