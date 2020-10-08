import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwBall } from "../actions/throwBall.js";

const ThrowBallButton = () => {
  const fieldList = useSelector((state) => state.fields);
  const dispatch = useDispatch();
  const pickedField = (fieldList) => {
    return fieldList[Math.floor(Math.random() * fieldList.length)];
  };
  const throwBall = () => {
    const pickedField = pickedField(fieldList);
    const fields = fieldList.map((field) => {
      if (field.id == pickedField) {
        field.ballOnFields = true;
      }
      return field;
    });
    dispatch(throwBall(fields));
  };

  return (
    <button className="btn btn-primary" onClick={() => throwBall()}>
      Throw Ball
    </button>
  );
};

export default ThrowBallButton;
