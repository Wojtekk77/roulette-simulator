import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../styles/NumOfSets.css";

const NumOfSets = (props) => {

  return (
    <div className={props.field.color}>
      {props.field.id} : {props.field.numOfSets} sets, {props.field.numOfWins} wins, ibs: {props.field.intervalBetweenSets} ibw: {props.field.intervalBetweenWins}
      {/* ibs we ask when last time the ball was on the field ||||| ibw we ask when we last time win on this field */}
    </div>
  )
}


const mapStateToProps = (state, ownState) => ({
  fieldList: state.fields
})

const mapDispatchToProps = (dispatch) => {
  return {
    throwBall: (fields) => { dispatch(fields) }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NumOfSets)