import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../styles/NumOfSets.css";

const NumOfSets = (props) => {
    
    return (
        <div className={props.field.color}>
            {props.field.id} : {props.field.numOfSets}
        </div>
    )
}


const mapStateToProps = (state, ownState) => {
    return {fieldList : state.fields}
    }
    
    const mapDispatchToProps = (dispatch) => {
      return {
        throwBall : (fields) => {dispatch(fields)}
      }
    }
    
   
    
export default connect(mapStateToProps, mapDispatchToProps)(NumOfSets)