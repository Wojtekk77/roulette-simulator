import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {throwBallAction} from "../../actions/throwBallAction.js";

const ThrowBallButton = (props) => {
  
  const getWins = () => {};

  const throwBall = () => {
    // const pickedField = props.fieldList[Math.floor(Math.random() * props.fieldList.length)]['id'];
    // const fields = props.fieldList.map((field) => {
    //   if (field.id == pickedField) {
    //     field.ballOnField = true;
    //   }else{field.ballOnField = false;}
    //   return field;
    // });
    
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
