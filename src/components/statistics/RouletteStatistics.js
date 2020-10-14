import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import NumOfSets from "./NumOfSets";

const RouletteStatistics = (props) => {

    const numsOfSets = props.fieldList.map((field) => {
            return <NumOfSets key={field.id} field={field} />
    }) 
    

    return (
        <div className="btn btn-primary" >
            {numsOfSets}
        </div>
    );
};

const mapStateToProps = (state, ownState) => {
return {fieldList : state.fields}
}

const mapDispatchToProps = (dispatch) => {
  return {
    throwBall : (fields) => {dispatch(fields)}
  }
}

export default connect(mapStateToProps,{})(RouletteStatistics);
