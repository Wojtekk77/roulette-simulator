import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { throwBallAction } from "../../actions/throwBallAction.js";

const ThrowBallButton = (props) => {

  const getWin = () => { };

  const throwBall = () => {
    const pickedField = props.fieldList[Math.floor(Math.random() * props.fieldList.length)]['id'];
    props.throwBallAction(props.fieldList, props.colorFields, props.partialFields, pickedField);
  };

  return (
    <button className="btn btn-primary" onClick={() => throwBall()}>
      Throw Ball
    </button>
  );
};

const mapStateToProps = (state, ownState) => {
  return {
    fieldList: state.roulette.fields,
    colorFields: state.roulette.colorFields,
    partialFields: state.roulette.partialFields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    throwBallAction: (fields, colorFields, partialFields, pickedField) => { dispatch(throwBallAction(fields, colorFields, partialFields, pickedField)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThrowBallButton);
