import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {throwBallAction} from "../../actions/throwBallAction.js";

const ThrowBallButton = (props) => {
  
  const getWin = () => {};

  const throwBall = () => {
    props.throwBall(props.fieldList);
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
    throwBall : (fields) => {dispatch(throwBallAction(fields))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThrowBallButton);
