import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { throwBall } from "../actions/throwBall.js";

const ThrowBallButton = (props) => {
  const dispatch = useDispatch();
  
  const pickedField = (props.fieldList) => {
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

const mapStateToProps = (state, ownState) => {
return {fieldList : state.fields}
}

const mapDispatchToProps = (dispatch) => {
  return {
    throwBall : () => {}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThrowBallButton);
